using System.Web.Mvc;
using Autofac;
using Autofac.Integration.Mvc;
using SPA.Main.RefreshTimer;

namespace SPA.Main.Web.App_Start
{
    public class AutofacConfig
    {
        public static void RegisterDependencies()
        {
            var builder = new ContainerBuilder();
            builder.Register(c => new Ticker()).As<ITicker>();
            builder.RegisterControllers(typeof(MvcApplication).Assembly);
 
            var container = builder.Build();
            DependencyResolver.SetResolver(new AutofacDependencyResolver(container));
        }
    }
}