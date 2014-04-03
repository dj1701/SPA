using System;
using System.Timers;
using Timer = System.Timers.Timer;

namespace SPA.Main.RefreshTimer
{
    public class Ticker
    {
        private readonly Timer timer = new Timer();
        private int hour;
        private int minute;
        private int second;

        public string Time { get; private set; }

        public void Start()
        {
            timer.Elapsed += new ElapsedEventHandler(TimerElapsed);
            timer.Interval = 1000;
            timer.Enabled = true;
            timer.Start();
        }

        private void TimerElapsed(object sender, ElapsedEventArgs e)
        {
            hour = e.SignalTime.Hour;
            minute = e.SignalTime.Minute;
            second = e.SignalTime.Second;
            Time = String.Format("{0:D2}:{1:D2}", hour, minute);
        }

        public void Stop()
        {
            timer.Stop();
            timer.Elapsed -= TimerElapsed;
            timer.Enabled = false;
        }
    }
}
