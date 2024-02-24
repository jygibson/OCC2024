using BlazorCodeCamp.Components;
using BlazorCodeCamp.Data;
using Microsoft.AspNetCore.Components.Web;

var builder = WebApplication.CreateBuilder(args);
builder.WebHost.UseWebRoot("wwwroot");
builder.WebHost.UseStaticWebAssets();
// Add services to the container.
builder.Services.AddRazorPages();
builder.Services.AddServerSideBlazor(options =>
{
    options.RootComponents.RegisterCustomElement<SimpleComponent>("simple-component");
    options.RootComponents.RegisterCustomElement<BasicParameter>("basic-parameters");
    options.RootComponents.RegisterCustomElement<MadLibsComponent>("mad-libs");
    options.RootComponents.RegisterCustomElement<JavacriptParameters>("javascript-parameters");


});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();

app.UseStaticFiles();

app.UseRouting();

app.MapBlazorHub();
app.MapFallbackToPage("/_Host");

app.Run();
