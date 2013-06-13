using System;
using System.Threading;
using NUnit.Framework;
using NUnit.Framework.SyntaxHelpers;
using SPA.Main.RefreshTimer;

namespace SPA.Main.Tests
{
    [TestFixture]
    public class RefreshTimerTests
    {
        [Test]
        public void ShouldHaveTimeSpanBetweenStartTimeAndFinishTime()
        {
            var ticker = new Ticker();
            var timeSpan = new TimeSpan(0, 0, 0, 10);
            var expectedFinishTime = DateTime.Now.Add(timeSpan);
            const int secondsTimeSpan = 11000;

            ticker.Start();
            Thread.Sleep(secondsTimeSpan);
            ticker.Stop();

            var expectedFinishTimeFormatted = String.Format("{0:D2}:{1:D2}:{2:D2}", expectedFinishTime.Hour, expectedFinishTime.Minute, expectedFinishTime.Second);
            Assert.IsNotNull(ticker.FinishTime);
            Assert.That(expectedFinishTimeFormatted,Is.EqualTo(ticker.FinishTime));
        }
    }
}
