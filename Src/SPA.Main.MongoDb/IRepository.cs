using System;
using MongoDB.Bson;

namespace SPA.Main.MongoDb
{
    public interface IRepository : IDisposable
    {
        void Open();
        void Close();
        void Add(Foo entity);
        BsonDocument Read(int id);
    }
}