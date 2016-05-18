using Api.Models;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace Api.Controllers
{
    [RoutePrefix("api/tasks")]
    public class TasksController : ApiController
    {
        public static IList<TaskModel> tasks = new List<TaskModel>()
        {
            new TaskModel() { Id = 1, ProjectId = 1, UserId = 1, Subject = "Clear room", Description = "Clear room in 5 minutes", Status = TaskStatus.Closed },
            new TaskModel() { Id = 2, ProjectId = 2 , UserId = 2, Subject = "Go for a walk", Description = "Visit your friend", Status = TaskStatus.Open }
        };

        public IHttpActionResult Get()
        {
            return Json(tasks);
        }

        public IHttpActionResult Get(int id)
        {
            var task = tasks.FirstOrDefault(x => x.Id == id);

            if (task == null)
            {
                return NotFound();
            }

            return Json(task);
        }

        public IHttpActionResult Post(TaskModel model)
        {
            if (model.Id != 0)
            {
                return this.Put(model.Id, model);
            }

            if (tasks.Any())
            {
                model.Id = tasks.Max(x => x.Id) + 1;
            }
            else
            {
                model.Id = 1;
            }

            tasks.Add(model);
            return Json(model);
        }

        public IHttpActionResult Put(int id, TaskModel model)
        {
            var taskToUpdate = tasks.FirstOrDefault(x => x.Id == id);

            if (taskToUpdate == null)
            {
                return NotFound();
            }

            taskToUpdate.Subject = model.Subject;
            taskToUpdate.Description = model.Description;
            taskToUpdate.Status = model.Status;

            return Ok();
        }

        public IHttpActionResult Delete(int id)
        {
            var taskToDelete = tasks.FirstOrDefault(x => x.Id == id);

            if (taskToDelete != null)
            {
                tasks.Remove(taskToDelete);
                return Ok();
            }

            return NotFound();
        }
    }
}
