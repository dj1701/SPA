using System;

namespace SPA.Main.MongoDb
{
    public class MongoDbAccessException : Exception
    {
        public MongoDbAccessException(string message)
            :base(message)
        {
            
        }
    }
}