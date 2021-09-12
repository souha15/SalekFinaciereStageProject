﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using WebApplicationPlateforme.Model.User;

namespace WebApplicationPlateforme.Model.Gestion_de_stock
{
    public class Stockage
    {
        public int Id { get; set; }
        public string nomstock { get; set; }
        public string respId { get; set; }
        public string respnom { get; set; }
        public string type { get; set; }


    public int attribut1 { get; set; }
    public int attribut7 { get; set; }
    public string attribut2 { get; set; }
    public string attribut3 { get; set; }
    public string attribut4 { get; set; }
    public string attribut5 { get; set; }
    public string attribut6 { get; set; }
    public string dateenreg { get; set; }
    public string userNameCreator { get; set; }

    [ForeignKey("ApplicationUser")]
    public string idUserCreator { get; set; }

    [ForeignKey("Stock")]
    public int stockId { get; set; }
    public virtual ApplicationUser ApplicationUser { get; set; }
    public virtual Stock Stock { get; set; }
}
}
