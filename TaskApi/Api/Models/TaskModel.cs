using System.Linq;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace Api.Models
{
    public class TaskModel
    {
        public int Id { get; set; }
        public int ProjectId { get; set; }
        public int UserId { get; set; }
        public string Subject { get; set; }
        public string Description { get; set; }

        [JsonConverter(typeof(StringEnumConverter))]
        public TaskStatus Status { get; set; }

        public string DisplayStatus
        {
            get
            {
                return Status.ToString();
            }
        }

        private ProjectModel _project;

        public ProjectModel Project
        {
            get
            {
                if (_project == null)
                {
                    _project = Controllers.ProjectsController.projects.FirstOrDefault(x => x.Id == this.ProjectId);
                }

                return _project;
            }
        }

        private UserModel _user;

        public UserModel User
        {
            get
            {
                if (_user == null)
                {
                    _user = Controllers.UsersController.users.FirstOrDefault(x => x.Id == this.UserId);
                }

                return _user;
            }
        }

        public void BindProject()
        {
            this._project = null;
        }

        public void BindUser()
        {
            this._user = null;
        }
    }

    public enum TaskStatus
    {
        Open,
        Closed
    }
}