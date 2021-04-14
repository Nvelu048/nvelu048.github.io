function getExperienceData(experience_data) {
    let experience = document.createElement('div')
    experience.className = "work-experience"
    let companyName = document.createElement('h4')
    companyName.innerHTML = experience_data['companyName']
    let designation = document.createElement('label')
    designation.innerHTML = experience_data['designation']
    let duration = document.createElement('label')
    duration.innerHTML = experience_data['duration']
    let responsibilities = document.createElement('p')
    responsibilities.innerHTML = experience_data['responsibilities']

    experience.appendChild(companyName)
    experience.appendChild(designation)
    experience.appendChild(duration)
    experience.appendChild(responsibilities)

    return experience
}

function workexperience() {
    let work_experience = document.getElementById('experience-container')

    const work_experience_data = [
        {
            'companyName': 'Zoho Corporation',
            'designation': 'Member Technical Staff',
            'duration': 'March 2021 - Present',
            'responsibilities': 'Framework that followed microservice architecture, and used MERN and React Native tech stack to meet end customers expectation'
        },
        {
            'companyName': 'Vaken Technologies Private Limited',
            'designation': 'Engineer',
            'duration': 'October 2020 - March 2021',
            'responsibilities': 'Framework that followed microservice architecture, and used MERN and React Native tech stack to meet end customers expectation'
        },
        {
            'companyName': 'IVTL Infoview Technologies Private Limited',
            'designation': 'Trainee Engineer',
            'duration': 'July 2018 - September 2020',
            'responsibilities': 'Framework that followed microservice architecture, and used MERN and React Native tech stack to meet end customers expectation'
        },
        {
            'companyName': 'IVTL Infoview Technologies Private Limited',
            'designation': 'Intern',
            'duration': 'May 2018 - June 2018',
            'responsibilities': 'Mobile application that tracks learning ability of autistic individuals'
        },
    ]

    for (experience of work_experience_data) {
        work_experience.appendChild(getExperienceData(experience))
    }
}

workexperience()