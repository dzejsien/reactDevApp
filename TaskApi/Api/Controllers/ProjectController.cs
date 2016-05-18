using Api.Models;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace Api.Controllers
{
    [RoutePrefix("api/projects")]
    public class ProjectsController : ApiController
    {
        public static IList<ProjectModel> projects = new List<ProjectModel>()
        {
            new ProjectModel() { Id = 1, Name = "First Project", Description = "This is first super project" },
            new ProjectModel() { Id = 2, Name = "Second Project", Description = "Second project which is the best" }
        };

        public IHttpActionResult Get()
        {
            return Json(projects);
        }

        public IHttpActionResult Get(int id)
        {
            var project = projects.FirstOrDefault(x => x.Id == id);

            if (project == null)
            {
                return NotFound();
            }

            return Json(project);
        }

        public IHttpActionResult Post(ProjectModel model)
        {
            if (model.Id != 0)
            {
                return this.Put(model.Id, model);
            }

            if (projects.Any())
            {
                model.Id = projects.Max(x => x.Id) + 1;
            }
            else
            {
                model.Id = 1;
            }

            projects.Add(model);
            return Json(model);
        }

        public IHttpActionResult Put(int id, ProjectModel model)
        {
            var projectToUpdate = projects.FirstOrDefault(x => x.Id == id);

            if (projectToUpdate == null)
            {
                return NotFound();
            }

            projectToUpdate.Name = model.Name;
            projectToUpdate.Description = model.Description;

            return Ok();
        }

        public IHttpActionResult Delete(int id)
        {
            var projectToDelete = projects.FirstOrDefault(x => x.Id == id);

            if (projectToDelete != null)
            {
                projects.Remove(projectToDelete);
                return Ok();
            }

            return NotFound();
        }
    }
}
