using System.Reflection;
using System.Web.Mvc;
using Autofac;
using Autofac.Core;
using Autofac.Integration.Mvc;
using SPA.Main.RefreshTimer;
using SPA.Main.Web.Controllers;

namespace SPA.Main.Web.App_Start
{
    public class AutofacConfig
    {
        public static void RegisterDependencies()
        {
            var builder = new ContainerBuilder();
            builder.Register(c => new Ticker()).As<ITicker>().InstancePerLifetimeScope();
            builder.RegisterType<IndexController>().WithParameter(ResolvedParameter.ForNamed<ITicker>("ticker"));
 
            var container = builder.Build();
            DependencyResolver.SetResolver(new AutofacDependencyResolver(container));
        }
    }
}