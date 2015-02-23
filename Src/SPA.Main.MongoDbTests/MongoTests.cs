using System.Collections.Generic;
using MongoDB.Bson;
using NUnit.Framework;
using SPA.Main.MongoDb;

namespace SPA.Main.MongoDbTests
{
    public class MongoTests
    {
        private MongoDbAccess _componentUnderTest;
        
        [SetUp]
        public void SetUpForEachTest()
        {
            _componentUnderTest = new MongoDbAccess("foo");
            _componentUnderTest.Open();
        }

        [TearDown]
        public void TearDownAfterEachTest()
        {
            _componentUnderTest.DeleteAll();
            _componentUnderTest.Close();
        }

        public class NonNestedDocumentTests : MongoTests
        {
            [Test]
            public void Should_read_one_record()
            {
                const string expectedResult = "DJ";

                _componentUnderTest.Add(new Foo
                {
                    Id = new ObjectId(),
                    Properties = new BsonDocument()
                    {
                        {"Id", 1},
                        {"Name", expectedResult}
                    }
                });

                var bsonDocument = _componentUnderTest.Read(1);

                Assert.That(bsonDocument["Name"].AsString, Is.EqualTo(expectedResult));
            }

            [Test]
            public void Should_remove_collection_after_save()
            {
                const string expectedResult = "DJ";

                _componentUnderTest.Add(new Foo
                {
                    Id = new ObjectId(),
                    Properties = new BsonDocument()
                    {
                        {"Id", 2},
                        {"Name", expectedResult}
                    }
                });

                var bsonDocument = _componentUnderTest.Read(2);
                Assert.That(bsonDocument["Name"].AsString, Is.EqualTo(expectedResult));

                _componentUnderTest.DeleteAll();
                Assert.Throws<MongoDbAccessException>(() => _componentUnderTest.Read(2));
            }

            [Test]
            public void Should_throw_MongoDbAccessException_for_record_not_found()
            {
                const int unknownRecId = 1001;
                const string expectedExpectionMessage = "Unable to find Id: 1001";

                var ex = Assert.Throws<MongoDbAccessException>(() => _componentUnderTest.Read(unknownRecId));
                Assert.That(ex.Message, Is.EqualTo(expectedExpectionMessage));
            }
        }

        public class NestedDocumentTests : MongoTests
        {
            private const string EnquiryByName = "John Doe";

            private readonly BsonDocument _nested = new BsonDocument
            {
                {"Id", 1},
                    {"name", EnquiryByName},
                        {
                            "address", new BsonDocument
                            {
                                {"street", "123 Main St."},
                                {"city", "Peterborough"},
                                {"County", "Cambridgeshire"},
                                {"Post Code", "PE1 3DS"}
                            }
                        }
            };

            [Test]
            public void Should_save_BSonDocument_nested_record()
            {
                var foo = new Foo {Properties = _nested};

                _componentUnderTest.Add(foo);

                const int id = 1;
                var bsonDocument = _componentUnderTest.Read(id);

                Assert.IsInstanceOf<BsonDocument>(bsonDocument);
            }

            [TestCase("street", "123 Main St.")]
            [TestCase("County", "Cambridgeshire")]
            [TestCase("Post Code", "PE1 3DS")]
            public void Should_retrieve_address_by_field_name(string fieldName, string expectedValue)
            {
                _componentUnderTest.Add(new Foo {Properties = _nested});

                var actualResult = _componentUnderTest.ReadByFieldName(fieldName);

                var expectedResult = new List<string>() { expectedValue };
                CollectionAssert.AreEqual(actualResult, expectedResult);
            }

            [TestCase("Address Line 1")]
            [TestCase("x")]
            [TestCase("County Name")]
            public void Should_throw_MongoDbAccessException_for_field_not_found(string incorrectFieldName)
            {
                var expectedExpectionMessage = string.Format("Unable to find field name: '{0}'", incorrectFieldName);

                var ex = Assert.Throws<MongoDbAccessException>(() => _componentUnderTest.ReadByFieldName(incorrectFieldName));
                Assert.That(ex.Message, Is.EqualTo(expectedExpectionMessage));
            }
        }
    }
}
