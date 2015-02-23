using MongoDB.Bson;

namespace SPA.Main.MongoDb
{
    public class Foo
    {
        public ObjectId Id { get; set; }
        public BsonDocument Properties { get; set; }
    }
}