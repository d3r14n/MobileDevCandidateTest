using System.Collections.Generic;

namespace UserApi.Services
{
    public class UserService
    {
        public List<User> GetUsers()
        {
            return new List<User>
            {
                new User { Id = 1, Name = "Derian", Email = "naired@mail.com" },
                new User { Id = 2, Name = "Karla", Email = "alrak@mail.com" },
                new User { Id = 3, Name = "Alejandro", Email = "ordnajela@mail.com" },
                new User { Id = 4, Name = "Samanta", Email = "atnamas@mail.com" },
                new User { Id = 5, Name = "Jorge", Email = "egroj@mail.com" },
            };
        }
    }

    public class User
    {
        public int Id {get; set;}
        public string Name { get; set; }
        public string Email { get; set; }
    }
}