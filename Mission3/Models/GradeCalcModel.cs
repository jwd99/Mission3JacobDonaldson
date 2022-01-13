using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

//GradeCalc model
namespace Mission3.Models
{
    public class GradeCalcModel
    {
        //required and keeps range within 100 for each calc field
        [Required]
        [Range(0.00, 100.00)]
        public string Assign { get; set; }
        // get set makes sure data is taken and returned
        [Required]
        [Range(0.00, 100.00)]
        public string Group { get; set; }

        [Required]
        [Range(0.00, 100.00)]
        public string Quiz { get; set; }

        [Required]
        [Range(0.00, 100.00)]
        public string Exam { get; set; }

        [Required]
        [Range(0.00, 100.00)]
        public string Intex { get; set; }

        public string Output { get; set; }

    }
}
