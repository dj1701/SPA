using System.Threading;
using System.Web.Mvc;
using SPA.Main.RefreshTimer;

namespace SPA.Main.Web.Controllers
{
    public class IndexController : Controller
    {
        [HttpGet]
        public string Index()
        {
            var ticker = new Ticker();
            ticker.Start();
            Thread.Sleep(2000);
            ticker.Stop();
            return ticker.Time;
        }

        public ActionResult DateDiff()
        {
            return View();
        }
    }
}
