using System;
using System.Web.Mvc;

namespace SPA.Main.Web.Controllers
{
    public class MainController : Controller
    {
        [HttpGet]
        public ActionResult Index()
        {
            return Json(DateTime.Now.ToString("HH:mm:ss"),JsonRequestBehavior.AllowGet);
        }
    }
}
