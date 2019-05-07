$(document).ready(function() {
    document.getElementById("data").addEventListener('change', function() {
        var data = new Date(this.value);
        if (isDate_(this.value) && data.getFullYear() > 1900)
            document.getElementById("idade").value = calculateAge(this.value);
    });

    function calculateAge(dobString) {
        var dob = new Date(dobString);
        var currentDate = new Date();
        var currentYear = currentDate.getFullYear();
        var birthdayThisYear = new Date(currentYear, dob.getMonth(), dob.getDate());
        var age = currentYear - dob.getFullYear();
        if (birthdayThisYear > currentDate) {
            age--;
        }
        return age;
    }

    function calcular(data) {
        var data = document.form.nascimento.value;
        alert(data);
        var partes = data.split("/");
        var junta = partes[2] + "-" + partes[1] + "-" + partes[0];
        document.form.idade.value = (calculateAge(junta));
    }
    var isDate_ = function(input) {
        var status = false;
        if (!input || input.length <= 0) {
            status = false;
        } else {
            var result = new Date(input);
            if (result == 'Invalid Date') {
                status = false;
            } else {
                status = true;
            }
        }
        return status;
    }

    function MyButton() {
        let isFemale = document.getElementById('female').checked;
        let isMale = document.getElementById('male').checked;
        let getAge = document.getElementById('idade').value;
        let getServiceOfficeTime = document.getElementById('serviceOfficer').value;
        let getServiceTime = document.getElementById('serviceOfficer').value;
        let categorie = document.querySelector('select[id=categorie]');
        let isPrivate = categorie.options[categorie.selectedIndex].value == 'private' ? true : false;
        let isPublic = categorie.options[categorie.selectedIndex].value == 'public' ? true : false;
        let isRuralWorker = categorie.options[categorie.selectedIndex].value == 'isRuralWorker' ? true : false;
        let isTeacher = categorie.options[categorie.selectedIndex].value == 'isTeacher' ? true : false;
        let isPoliceOfficer = categorie.options[categorie.selectedIndex].value == 'isPoliceOfficer' ? true : false;
        let isPrisionalAgent = categorie.options[categorie.selectedIndex].value == 'isPrisionalAgent' ? true : false;
        if (isPrivate || isPublic) {
            if (isFemale && (getAge >= 62)) {
                if (isPrivate) {
                    document.getElementById('resume').innerHTML = "Mulheres a partir de 62 anos que trabalharam no setor privado precisam de ter 20 anos de contribuição mínima para se aposentarem";
                } else {
                    document.getElementById('resume').innerHTML = "Homem do setor privado: 20 de tempo mínimo";
                }
            } else if (getAge >= 65) {
                if (isPublic) {
                    document.getElementById('resume').innerHTML = "Mulheres a partir de 62 anos que trabalharam no setor público precisam de ter 20 anos de contribuição mínima para se aposentarem.";
                } else {
                    document.getElementById('resume').innerHTML = "Homens a partir de 65 anos que trabalharam no setor público precisam de ter 25 anos de contribuição mínima para se aposentarem";
                }
            }
        } else if (isRuralWorker) {
            if (getAge >= 60) {
                document.getElementById('resume').innerHTML = 'Trabalhadores rurais precisam de ter 60 anos de idade e também 20 anos como contribuintes';
            }
        } else if (isTeacher) {
            if (getAge >= 60) {
                document.getElementById('resume').innerHTML = 'Professores a partir de 60 anos precisam ter 30 anos de contribuição, no mínimo';
            }
        } else if (isPoliceOfficer) {
            if (getAge >= 55) {
                console.log('getAge', getAge)
                if (isFemale && getServiceOfficeTime >= 15) {
                    document.getElementById('resume').innerHTML = 'Policiais civis e federais femininos precisam ter 25 anos de contribuição, sendo que, destes anos, 15 anos devem ser em tempo de exercício';
                } else if (isMale && getServiceOfficeTime >= 20) {
                    console.log('getServiceOfficeTime', getServiceOfficeTime)
                    document.getElementById('resume').innerHTML = 'Policiais civis e federais homens precisam ter 30 anos de contribuição, sendo que, destes anos, 20 anos devem ser em tempo de exercício';
                }
            }
        } else if (isPrisionalAgent && getAge >= 55) {
            document.getElementById('resume').innerHTML = 'Agentes penitenciários e socioEducativos precisam ter 20 anos, no mínimo, de contribuição para se aposentarem';
        }
    }
});
