export default {
    title: 'Propointment',
    links: [{to: '/', name: 'Home'}, {to: '/about', name: 'About'}, {
        to: '/payments',
        name: 'Payments'
    }],
    pages: [
    {
        header: 'Home', link: '',
        sections: [
            {description: ['Spicey Image Coursal']},
            {externalLink: {link:'https:', name:'Sign Up'}, description: ['Expensive Detail Header', 'No one expects the real sign up  info', 'Description of why we should be used/'], header: 'Here are the real Deets'}],
    },
    {
        header: 'Payments', link: 'payments', isAbove: true,
        sections: [
            {
                description: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dolor metus, condimentum sed ornare vel, iaculis ut orci. Morbi scelerisque nulla sem, non aliquet risus luctus eu. Nulla facilisi. Nunc interdum urna ipsum, ut euismod ipsum interdum ac. Cras vitae hendrerit erat. Praesent dapibus sapien nec justo egestas ornare. Sed sed mi non lorem rutrum blandit ut nec erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas eget malesuada massa. Phasellus pretium purus non tortor mattis rhoncus. Sed convallis ipsum sollicitudin, blandit lacus quis, malesuada ex. Praesent vel dignissim massa.',
                    'Nunc sapien magna, finibus eget nisl sit amet, bibendum rhoncus urna. Suspendisse bibendum libero luctus, volutpat est non, pretium magna. Proin gravida, justo ut rhoncus dictum, lorem velit mollis lacus, eu facilisis nisl neque non justo. Phasellus egestas libero non mauris ultricies, vel feugiat est varius. Vivamus aliquam pharetra ex, sed blandit leo auctor nec. Maecenas aliquet ante molestie tellus ultricies, efficitur mollis neque gravida. Aliquam erat volutpat. Aenean pellentesque, velit in pretium bibendum, ex turpis bibendum sapien, egestas dictum lacus magna nec justo. Sed mi est, suscipit in convallis ut, ultricies imperdiet metus. Donec ut mi malesuada, imperdiet magna a, iaculis ipsum.',
                    'Aenean vehicula odio neque, a lobortis nulla commodo sit amet. In placerat urna augue, id tristique dolor ultricies id. Quisque tristique mi ut odio condimentum, id luctus massa scelerisque. Cras ut cursus elit. Sed id tellus quis sem dapibus rutrum. Praesent eget leo est. Nulla maximus augue quis dui tempus rutrum ac at lacus. Sed ipsum tellus, bibendum nec purus vel, tincidunt pellentesque velit. Proin ut sem consequat, lobortis dui a, varius neque.',
                    'Proin in ex commodo, pretium mauris nec, commodo lectus. Mauris dictum nulla a ultricies congue. Maecenas pellentesque consectetur iaculis. Morbi porttitor tincidunt erat, eget mattis dolor semper a. Nam vitae urna nunc. Nunc fringilla auctor dapibus. Nulla eget nisi at dui viverra luctus. Proin quis elit et nisi faucibus viverra. Pellentesque scelerisque tortor in purus maximus rhoncus. Vestibulum vulputate ultricies odio, eu fringilla purus auctor hendrerit. Phasellus quis odio volutpat, tristique quam vel, auctor tortor. Cras interdum porta leo a dapibus.',
                   'Cras dapibus semper scelerisque. Aenean suscipit, est sed bibendum pharetra, tortor purus convallis eros, id blandit sem diam a arcu. Sed ut augue in nunc rhoncus laoreet. Praesent vestibulum felis at porta consequat. Phasellus at nisl euismod, imperdiet libero id, blandit erat. Vestibulum eget neque metus. Cras sed diam quis enim tempor mollis ut vitae dolor. Proin nec eros tincidunt, egestas sapien vel, vehicula libero. Nullam arcu metus, bibendum eu malesuada aliquam, lobortis ac enim. Pellentesque vel faucibus lacus. Quisque eu quam consectetur, elementum velit eu, pharetra massa.'],
                externalLink: {link:'https:', name:'Sign Up'}
            }
            ]
    },
    {
        header: 'About', link: 'about', isAbove: false,
        sections: [
            {description: ['This is a detail description of the applicationLorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dolor metus, condimentum sed ornare vel, iaculis ut orci. Morbi scelerisque nulla sem, non aliquet risus luctus eu. Nulla facilisi. Nunc interdum urna ipsum, ut euismod ipsum interdum ac. Cras vitae hendrerit erat. Praesent dapibus sapien nec justo egestas ornare. Sed sed mi non lorem rutrum blandit ut nec erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas eget malesuada massa. Phasellus pretium purus non tortor mattis rhoncus. Sed convallis ipsum sollicitudin, blandit lacus quis, malesuada ex. Praesent vel dignissim massa.']},
            {header: 'Our Mission', description: ['Image 1', 'Image 2', 'Image 3']},
            {header: 'Ourselves', description: ['Description of Meh 1', 'Description of yah 2']}
            ]
    }],
};