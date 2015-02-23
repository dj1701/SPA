using MongoDB.Bson;

namespace SPA.Main.MongoDb
{
    public interface INoSqlAccess
    {
        void Open();
        void Close();
        void Add(Foo entity);
        BsonDocument Read(int id);
    }
}