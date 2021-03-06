﻿using System;
using System.Timers;
using Timer = System.Timers.Timer;

namespace SPA.Main.RefreshTimer
{
    public interface ITicker
    {
        void Start();
        void Stop();
        string Time { get; set; }
    }
    
    public class Ticker : ITicker
    {
        private readonly Timer _timer = new Timer();
        private int _hour;
        private int _minute;
        private int _second;

        public string Time { get; set; }

        public void Start()
        {
            _timer.Elapsed += new ElapsedEventHandler(TimerElapsed);
            _timer.Interval = 200;
            _timer.Enabled = true;
            _timer.Start();
        }

        private void TimerElapsed(object sender, ElapsedEventArgs e)
        {
            _hour = e.SignalTime.Hour;
            _minute = e.SignalTime.Minute;
            _second = e.SignalTime.Second;
            Time = String.Format("{0:D2}:{1:D2}:{2:D2}", _hour, _minute, _second);
        }

        public void Stop()
        {
            _timer.Stop();
            _timer.Elapsed -= TimerElapsed;
            _timer.Enabled = false;
        }
    }
}
