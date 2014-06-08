﻿using System.Threading;
using System.Web.Mvc;
using SPA.Main.RefreshTimer;

namespace SPA.Main.Web.Controllers
{
    public class IndexController : Controller
    {
        private readonly Ticker _ticker;

        public IndexController()
        {

        }

        public IndexController(Ticker ticker)
        {
            _ticker = ticker;
        }

        [HttpGet]
        public string Index()
        {
            _ticker.Start();
            Thread.Sleep(2000);
            _ticker.Stop();
            return _ticker.Time;
        }

        public ActionResult DateDiff()
        {
            return View();
        }
    }
}
