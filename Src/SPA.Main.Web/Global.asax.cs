using System.Web.Mvc;
using System.Web.Routing;
using SPA.Main.Web.App_Start;
using SPA.MainUI.Web;

namespace SPA.Main.Web
{
    // Note: For instructions on enabling IIS6 or IIS7 classic mode, 
    // visit http://go.microsoft.com/?LinkId=9394801
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();

            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            AutofacConfig.RegisterDependencies();
        }

        public void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
            routes.MapRoute(
               "Default",                                              // Route name
               "{controller}/{action}",                           // URL with parameters
               new { controller = "Index", action = "Index" }
           );
        }
    }
}