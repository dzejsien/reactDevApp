using Api.Models;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace Api.Controllers
{
    [RoutePrefix("api/users")]
    public class UsersController : ApiController
    {
        public static IList<UserModel> users = new List<UserModel>()
        {
            new UserModel() { Id = 1, FirstName = "Gerard", LastName = "Molski" },
            new UserModel() { Id = 2, FirstName = "Ryszard", LastName = "Kapustka" },
            new UserModel() { Id = 3, FirstName = "Michał", LastName = "Szklanka" },
            new UserModel() { Id = 4, FirstName = "Szymon", LastName = "Widowski" }
        };

        public IHttpActionResult Get()
        {
            return Json(users);
        }

        public IHttpActionResult Get(int id)
        {
            var user = users.FirstOrDefault(x => x.Id == id);

            if (user == null)
            {
                return NotFound();
            }

            return Json(user);
        }
    }
}
