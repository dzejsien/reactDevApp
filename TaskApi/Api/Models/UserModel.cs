namespace Api.Models
{
    public class UserModel
    {
        public string FirstName { get; internal set; }
        public int Id { get; internal set; }
        public string LastName { get; internal set; }
        public string FullName { get { return string.Format("{0} {1}", this.FirstName, this.LastName); } }
    }
}