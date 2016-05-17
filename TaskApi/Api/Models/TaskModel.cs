using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace Api.Models
{
    public class TaskModel
    {
        public int Id { get; set; }
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
    }

    public enum TaskStatus
    {
        Open,
        Closed
    }
}