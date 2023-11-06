document.addEventListener('DOMContentLoaded', function () {
    const categories = ['popular products','];

    // Function to render courses
    function renderCourses(category, courses) {
        const courseContainer = document.querySelector(`#${category} .course`);

        courses.forEach(course => {
            const courseElement = document.createElement('div');
            courseElement.innerHTML = `
                <img src="${course.image}" alt="${course.title}">
                <h3>${course.title}</h3>
                <p>${course.description}</p>
                <p><a href="${course.affiliateLink}" target="_blank">Enroll Now</a></p>
            `;
            courseContainer.appendChild(courseElement);
        });
    }

    // Define courses for each category
    const youtubeCourses = [
        { title: '', description: '.', affiliateLink: '/', image: ' },

    ];

    const affiliateCourses = [
        { title: '', description:', affiliateLink: 'your-affiliate-link', image: 'path/to/affiliate-course-1.jpg' },
        // Add more affiliate courses
  
    ];

    const cryptoCourses = [
        { title: '', description: '.', affiliateLink: 'your-affiliate-link', image:  },
        // const youtubeCourses = [
        { title: '', description: '.', affiliateLink: 'your-affiliate-link', image:  },
      // Add more YouTube courses Add more crypto courses
    ];

    const photoMarketingCourses = [
        { title: '', description: '.', affiliateLink: 'your-affiliate-link', image:  },
        // Add more photo marketing courses
    ];

    const facebookCourses = [
        { title: '', description: '.', affiliateLink: 'your-affiliate-link', image: 'path/to/facebook-course-1.jpg' },
        // Add more Facebook courses
    ];

    const networkCourses = [
        { title: 'Network Security Basics', description: 'Learn the basics of network security.', affiliateLink: 'your-affiliate-link', image: 'path/to/network-course-1.jpg' },
        // Add more network courses
    ];

    // Render courses for each category
    renderCourses('youtube', youtubeCourses);
    renderCourses('affiliate', affiliateCourses);
    renderCourses('crypto', cryptoCourses);
    renderCourses('photo-marketing', photoMarketingCourses);
    renderCourses('facebook', facebookCourses);
    renderCourses('network', networkCourses);

    // Add AdMob link
    const adLinkContainer = document.querySelector('footer p:last-child');
    adLinkContainer.innerHTML = `;
});


       