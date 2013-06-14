using System.Web.Mvc;

namespace SPA.Main.Web.Controllers
{
    public class MainController : Controller
    {
        [HttpPost]
        public ActionResult Index()
        {
            return View();
        }
    }
}
