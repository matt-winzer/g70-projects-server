exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "project"; ALTER SEQUENCE project_id_seq RESTART WITH 6;')
    .then(function () {
      var projects = [{
        id: 1,
        name: 'P1 Project',
        description: `Lorem ipsum dolor amet scenester venmo deep v slow-carb. Yuccie keytar tattooed enamel pin iPhone. 90's thundercats tousled plaid jianbing, echo park kickstarter normcore sustainable affogato. Migas listicle cardigan jean shorts synth kickstarter next level jianbing la croix seitan banjo beard squid ramps. Hammock waistcoat thundercats, banjo mlkshk photo booth 8-bit freegan stumptown godard lo-fi tofu yuccie mustache slow-carb.`,
        deployedUrl: 'https://www.google.com/',
        gitUrl: 'https://github.com/',
        studentId: 1
      }, {
        id: 2,
        name: 'Stranger Things Contact Book',
        description: `Cornhole authentic photo booth gochujang, iceland activated charcoal flannel. Literally brunch 8-bit iceland. Messenger bag cred everyday carry readymade master cleanse, farm-to-table fixie keytar lumbersexual PBR&B chambray photo booth flannel hexagon brooklyn. Offal cardigan kitsch pour-over tbh pork belly. Franzen drinking vinegar farm-to-table, humblebrag vinyl DIY coloring book. Sustainable blue bottle chicharrones raclette kinfolk, celiac next level four loko poutine tilde.`,
        deployedUrl: 'https://www.google.com/',
        gitUrl: 'https://github.com/',
        studentId: 1
      }, {
        id: 3,
        name: 'Bob Ross Simulator',
        description: `Brooklyn direct trade chartreuse godard wolf, hammock pok pok lo-fi readymade. Narwhal williamsburg activated charcoal synth helvetica kombucha tacos organic cold-pressed food truck fashion axe wayfarers taxidermy hashtag slow-carb. Church-key plaid bespoke, pickled cred venmo food truck pabst hell of shaman. Mixtape sartorial adaptogen gentrify sustainable lomo.`,
        deployedUrl: 'https://www.google.com/',
        gitUrl: 'https://github.com/',
        studentId: 1
      }, {
        id: 4,
        name: 'Pong Pong',
        description: `Tacos knausgaard semiotics everyday carry art party disrupt mixtape church-key bicycle rights. Vexillologist tofu hot chicken, yr VHS next level viral occupy street art art party forage squid palo santo lyft keffiyeh. Jianbing humblebrag VHS neutra vape letterpress food truck meggings wayfarers meh selvage franzen. Coloring book fashion axe deep v paleo.`,
        deployedUrl: 'https://www.google.com/',
        gitUrl: 'https://github.com/',
        studentId: 1
      }, {
        id: 5,
        name: 'Tic Tac Toe',
        description: `Gluten-free af banjo blog, banh mi knausgaard chillwave literally semiotics taiyaki. Vice neutra banh mi copper mug hell of, kogi knausgaard four loko quinoa chicharrones palo santo. Taiyaki migas cliche, offal meditation flexitarian narwhal palo santo 8-bit echo park unicorn tbh +1 twee gentrify. Gentrify tacos normcore shoreditch truffaut`,
        deployedUrl: 'https://www.google.com/',
        gitUrl: 'https://github.com/',
        studentId: 1
      }]
      return knex('project').insert(projects);
    })
}
