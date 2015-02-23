using System.Collections.Generic;
using System.Linq;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Linq;

namespace SPA.Main.MongoDb
{
    public class MongoDbAccess : INoSqlAccess
    {
        private readonly string _dbName;
        private MongoCollection<BsonDocument> _books;
        private MongoServer _server;
        private readonly BsonDocument _entity = new BsonDocument();
        private MongoDatabase _db;

        public MongoDbAccess(string dbName)
        {
            _dbName = dbName;
        }

        public void Open()
        {
            const string connectionString = "mongodb://localhost";
            var client = new MongoClient(connectionString);
            _server = client.GetServer();
          
            _db = _server.GetDatabase(_dbName);
            _books = _db.GetCollection<BsonDocument>(_dbName);
        }

        public void Close()
        {
            _server.Disconnect();
        }

        public void Add(Foo entity)
        {
            _books.Insert(entity);
        }

        public BsonDocument Read(int id)
        {
            BsonDocument properties = null;

            var queryResult = _books.AsQueryable<Foo>().Where(x => x.Properties["Id"] == id);
            var firstOrDefault = queryResult.FirstOrDefault();
            properties = (firstOrDefault != null) ? firstOrDefault.Properties : null;

            if (properties == null)
            {
                throw new MongoDbAccessException(string.Format("Unable to find Id: {0}", id));
            }

            return properties;
        }

        public List<string> ReadByFieldName(string fieldName)
        {
            var allFields = _books.AsQueryable<Foo>().Where(foo => !foo.Properties[fieldName].IsBsonNull);
            var list = allFields.ToList();

            if (list.Count == 0)
            {
                throw new MongoDbAccessException(string.Format("Unable to find field name: '{0}'", fieldName));
            }

            return (from element in list from item in element.Properties where item.Value.ToString().Contains(fieldName) select item.Value[fieldName].AsString).ToList();
        }

        public void DeleteAll()
        {
            _books.Drop();
        }
    }
}