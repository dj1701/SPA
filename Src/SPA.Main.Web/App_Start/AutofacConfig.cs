using System.Reflection;
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
            builder.RegisterType<Ticker>().As<ITicker>().InstancePerHttpRequest();
            builder.RegisterControllers(Assembly.GetExecutingAssembly()).InstancePerHttpRequest();

            var container = builder.Build();
            DependencyResolver.SetResolver(new AutofacDependencyResolver(container));
        }
    }
}