var CHARACTERS = {

  sephiroth: {
    name: "SEPHIROTH",
    epithet: "The One-Winged Angel",
    subtitle: "Former SOLDIER 1st Class &middot; Shinra",
    page: "sephiroth.html",
    blurb: "Masamune, Supernova, and the Nibelheim turning point.",
    portrait: { img: "images/portrait", alt: "Sephiroth portrait", ph: "images/portrait<br>(face close-up)", focus: "50% 30%" },
    fullArt:  { img: "images/full_art", alt: "Sephiroth full art", ph: "images/full_art<br>(full body)" },
    role: {
      title: "Main Antagonist",
      list: "Final Fantasy VII (1997), Final Fantasy VII: Advent Children (2005), Final Fantasy VII: Last Order (2006), Final Fantasy VII: Rebirth (2024)"
    },
    weapon: { name: "Masamune", note: "An exceptionally long katana", img: "images/masamune", alt: "Masamune", ph: "images/masamune", mediaClass: "sword" },
    stat: { label: "Rank", value: "1st Class", note: "Hero of the Wutai War" },
    move: {
      name: "Supernova",
      sub: "Final Fantasy VII &middot; Final Battle",
      text: "A world ending spell.",
      img: "images/supernova"
    },
    landscape: { img: "images/landscape sephiroth", alt: "Landscape", ph: "images/landscape<br>(wide landscape image)", focus: "50% 35%" },
    favorites: {
      title: "Why He's My Favorite",
      items: [
        "Bro is just aura farming everywhere.",
        "Bro has his own theme song. It adds to his aura farming.",
        "Bro is a well-written character, well-developed, and very memorable for me."
      ]
    },
    location: { name: "Nibelheim", note: "The turning point", img: "images/nibelheim", alt: "Nibelheim", ph: "images/location<br>(Nibelheim)", focus: "50% 45%" },
    units: [
      { label: "Character Designer", value: "Tetsuya Nomura", tone: "t-dark", valueClass: "fs-5 fw-bold accent serif" },
      { label: "Voice (JP)", value: "Toshiyuki Morikawa", tone: "t-mako", valueClass: "fw-bold serif" },
      { label: "First Appearance", value: "1997", note: "PlayStation", tone: "t-dark", valueClass: "fs-3 fw-bold accent serif" },
      { label: "Origin", value: "Jenova Project", tone: "t-mako", valueClass: "fs-5 fw-bold serif" }
    ]
  },

  cloud: {
    name: "CLOUD",
    epithet: "The Ex-SOLDIER",
    subtitle: "Mercenary &middot; AVALANCHE",
    page: "cloud.html",
    blurb: "The Buster Sword, Omnislash, and a journey that starts in Midgar.",
    portrait: { img: "images/cloud-portrait", alt: "Cloud portrait", ph: "images/cloud-portrait<br>(face close-up)", focus: "50% 35%" },
    fullArt:  { img: "images/cloud-full-art", alt: "Cloud full art", ph: "images/cloud-full-art<br>(full body)", focus: "50% 10%" },
    role: {
      title: "Protagonist",
      list: "Final Fantasy VII (1997), Final Fantasy VII: Advent Children (2005), Crisis Core: Final Fantasy VII (2007), Final Fantasy VII: Remake (2020), Final Fantasy VII: Rebirth (2024)"
    },
    weapon: { name: "Buster Sword", note: "A giant broadsword handed down to him", img: "images/cloud-buster-sword", alt: "Buster Sword", ph: "images/cloud-buster-sword", mediaClass: "buster-sword" },
    stat: { label: "Rank", value: "1st Class", note: "Claimed, never earned" },
    move: {
      name: "Omnislash",
      sub: "Final Fantasy VII &middot; Limit Break",
      text: "A storm of finishing strikes.",
      img: "images/cloud-omnislash"
    },
    landscape: { img: "images/cloud-landscape", alt: "Landscape", ph: "images/cloud-landscape<br>(wide landscape image)", focus: "50% 40%" },
    favorites: {
      title: "Why He's My Favorite",
      items: [
        "Bro swings a sword taller than he is and still makes it look weightless.",
        "Bro's whole arc is a guy slowly putting himself back together. That's the good stuff.",
        "Bro has the coldest Limit Breaks in the series."
      ]
    },
    location: { name: "Midgar", note: "Where the journey begins", img: "images/midgar", alt: "Midgar", ph: "images/location<br>(Midgar)", focus: "50% 45%" },
    units: [
      { label: "Character Designer", value: "Tetsuya Nomura", tone: "t-dark", valueClass: "fs-5 fw-bold accent serif" },
      { label: "Voice (JP)", value: "Takahiro Sakurai", tone: "t-mako", valueClass: "fw-bold serif" },
      { label: "First Appearance", value: "1997", note: "PlayStation", tone: "t-dark", valueClass: "fs-3 fw-bold accent serif" },
      { label: "Origin", value: "Hojo's Experiment", tone: "t-mako", valueClass: "fs-5 fw-bold serif" }
    ]
  },

  tifa: {
    name: "TIFA",
    epithet: "The Avalanche Brawler",
    subtitle: "Bartender &middot; Seventh Heaven",
    page: "tifa.html",
    blurb: "Premium Heart, Final Heaven, and a bar called Seventh Heaven.",
    portrait: { img: "images/tifa-portrait", alt: "Tifa portrait", ph: "images/tifa-portrait<br>(face close-up)", focus: "50% 30%" },
    fullArt:  { img: "images/tifa-full-art", alt: "Tifa full art", ph: "images/tifa-full-art<br>(full body)", focus: "50% 15%" },
    role: {
      title: "Core Party Member",
      list: "Final Fantasy VII (1997), Final Fantasy VII: Advent Children (2005), Crisis Core: Final Fantasy VII (2007), Final Fantasy VII: Remake (2020), Final Fantasy VII: Rebirth (2024)"
    },
    weapon: { name: "Premium Heart", note: "Knuckle gloves &mdash; her fists do the rest", img: "images/tifa-premium-heart", alt: "Premium Heart", ph: "images/tifa-premium-heart", mediaClass: "gloves" },
    stat: { label: "Fighting Style", value: "Zangan-style", note: "Trained by Master Zangan" },
    move: {
      name: "Final Heaven",
      sub: "Final Fantasy VII &middot; Limit Break",
      text: "One punch, saved for last.",
      img: "images/tifa-final-heaven"
    },
    landscape: { img: "images/tifa-landscape", alt: "Landscape", ph: "images/tifa-landscape<br>(wide landscape image)", focus: "50% 40%" },
    favorites: {
      title: "Why She's My Favorite",
      items: [
        "Tifa throws hands and keeps up with everyone without a sword.",
        "She's the heart of the party, and the reason Cloud doesn't fall apart.",
        "Her Limit Breaks hit like a truck, and the Remake trilogy did her justice."
      ]
    },
    location: { name: "Seventh Heaven", note: "Her bar, and AVALANCHE's base", img: "images/seventh-heaven", alt: "Seventh Heaven", ph: "images/location<br>(Seventh Heaven)", focus: "50% 45%" },
    units: [
      { label: "Character Designer", value: "Tetsuya Nomura", tone: "t-dark", valueClass: "fs-5 fw-bold accent serif" },
      { label: "Voice (JP)", value: "Ayumi Ito", tone: "t-mako", valueClass: "fw-bold serif" },
      { label: "First Appearance", value: "1997", note: "PlayStation", tone: "t-dark", valueClass: "fs-3 fw-bold accent serif" },
      { label: "Origin", value: "Nibelheim", tone: "t-mako", valueClass: "fs-5 fw-bold serif" }
    ]
  }

};

var IMG_EXTS = [".jpg", ".jpeg", ".png", ".webp"];

function cls(extra) {
  return extra ? " " + extra : "";
}

function media(item, extra, focus) {
  return '<div class="media' + cls(extra) + '"' + (focus ? ' style="--focus: ' + focus + ';"' : '') + '>' +
    '<span class="img-ph">' + item.ph + '</span>' +
    '<img data-img="' + item.img + '" alt="' + (item.alt || "") + '">' +
    '</div>';
}

var CARDS = {

  hero: function (c, extra) {
    return '<div class="card p-1 h-100 tall t-dark t-hero' + cls(extra) + '">' +
      media(c.portrait, "", c.portrait.focus) +
      '<div class="inner glass">' +
        '<h1 class="serif hero-name mb-0">' + c.name + '</h1>' +
        '<div class="accent serif" style="letter-spacing:.08em">' + c.epithet + '</div>' +
        '<small>' + c.subtitle + '</small>' +
      '</div>' +
    '</div>';
  },

  fullArt: function (c, extra) {
    return '<div class="card p-1 h-100 tall t-mako' + cls(extra) + '">' +
      media(c.fullArt, "fit-contain", c.fullArt.focus) +
    '</div>';
  },

  role: function (c, extra) {
    return '<div class="card p-1 t-dark' + cls(extra) + '">' +
      '<div class="inner">' +
        '<div class="fs-5 fw-bold serif">' + c.role.title + '</div>' +
        '<small>' + c.role.list + '</small>' +
      '</div>' +
    '</div>';
  },

  weapon: function (c, extra) {
    return '<div class="card p-1 t-mako' + cls(extra) + '">' +
      media(c.weapon, c.weapon.mediaClass) +
      '<span class="weapon-label serif fw-bold fs-6">' + c.weapon.name + '</span>' +
      '<span class="weapon-sub">' + c.weapon.note + '</span>' +
    '</div>';
  },

  stat: function (c, extra) {
    return '<div class="card p-1 t-dark' + cls(extra) + '">' +
      '<div class="inner">' +
        '<small>' + c.stat.label + '</small>' +
        '<div class="fs-4 fw-bold accent serif">' + c.stat.value + '</div>' +
        '<small>' + c.stat.note + '</small>' +
      '</div>' +
    '</div>';
  },

  move: function (c, extra) {
    return '<div class="card p-1 h-100 tall t-mako t-moves t-nova' + cls(extra) + '">' +
      '<img class="nova-circle" data-img="' + c.move.img + '" alt="" aria-hidden="true">' +
      '<div class="inner">' +
        '<div class="nova-name serif">' + c.move.name + '</div>' +
        '<div class="nova-sub">' + c.move.sub + '</div>' +
        '<p class="nova-text">' + c.move.text + '</p>' +
      '</div>' +
    '</div>';
  },

  landscape: function (c, extra) {
    return '<div class="card p-1 h-100 wide t-photo no-fade' + cls(extra) + '">' +
      media(c.landscape, "", c.landscape.focus) +
    '</div>';
  },

  favorites: function (c, extra) {
    var quotes = c.favorites.items.map(function (t) {
      return '<p class="fav-text">' + t + '</p>';
    }).join("");

    return '<div class="card p-1 h-100 wide t-mako t-fav' + cls(extra) + '">' +
      '<div class="inner">' +
        '<div class="fav-head">' +
          '<div class="quote-mark serif" aria-hidden="true">&ldquo;</div>' +
          '<div class="fw-bold serif mb-2">' + c.favorites.title + '</div>' +
        '</div>' +
        '<div class="fav-list">' + quotes + '</div>' +
      '</div>' +
    '</div>';
  },

  location: function (c, extra) {
    return '<div class="card p-1 h-100 wide t-photo' + cls(extra) + '">' +
      media(c.location, "", c.location.focus) +
      '<div class="inner">' +
        '<div class="fs-3 fw-bold serif">' + c.location.name + '</div>' +
        '<small>' + c.location.note + '</small>' +
      '</div>' +
    '</div>';
  },

  unit: function (c, i, extra) {
    var u = c.units[i];
    return '<div class="card p-1 unit ' + u.tone + cls(extra) + '">' +
      '<div class="inner">' +
        '<small>' + u.label + '</small>' +
        '<div class="' + u.valueClass + '">' + u.value + '</div>' +
        (u.note ? '<small>' + u.note + '</small>' : '') +
      '</div>' +
    '</div>';
  }

};

function col(classes, inner) {
  return '<div class="' + classes + '">' + inner + '</div>';
}

function stack(cards) {
  return '<div class="row stack">' + cards.map(function (card) {
    return col("col-12 p-1", card);
  }).join("") + '</div>';
}

function unitsRow(c) {
  return '<div class="row">' +
    col("col-6 col-lg-3 p-1", CARDS.unit(c, 0)) +
    col("col-6 col-lg-3 p-1", CARDS.unit(c, 1)) +
    col("col-6 col-lg-3 p-1", CARDS.unit(c, 2)) +
    col("col-6 col-lg-3 p-1", CARDS.unit(c, 3)) +
  '</div>';
}

var LAYOUTS = {

  alpha: function (c) {
    return '<div class="row">' +
        col("col-12 col-lg-3 p-1", CARDS.hero(c)) +
        col("col-12 col-sm-6 col-lg-3 p-1", CARDS.fullArt(c)) +
        col("col-12 col-sm-6 col-lg-3", stack([CARDS.role(c), CARDS.weapon(c), CARDS.stat(c)])) +
        col("col-12 col-lg-3 p-1", CARDS.move(c)) +
      '</div>' +
      '<div class="row">' +
        col("col-12 col-lg-6 p-1", CARDS.landscape(c)) +
        col("col-6 col-lg-3 p-1", CARDS.favorites(c)) +
        col("col-6 col-lg-3 p-1", CARDS.location(c)) +
      '</div>' +
      unitsRow(c);
  },

  beta: function (c) {
    return '<div class="row">' +
        col("col-12 col-lg-6 p-1", CARDS.hero(c)) +
        col("col-12 col-sm-6 col-lg-3", stack([CARDS.role(c), CARDS.stat(c)])) +
        col("col-12 col-sm-6 col-lg-3 p-1", CARDS.move(c)) +
      '</div>' +
      '<div class="row">' +
        col("col-12 col-sm-4 p-1", CARDS.fullArt(c)) +
        col("col-12 col-sm-4 p-1", CARDS.weapon(c, "h-100 wide")) +
        col("col-12 col-sm-4 p-1", CARDS.location(c)) +
      '</div>' +
      '<div class="row">' +
        col("col-12 col-lg-8 p-1", CARDS.landscape(c)) +
        col("col-12 col-lg-4 p-1", CARDS.favorites(c)) +
      '</div>' +
      unitsRow(c);
  },

  gamma: function (c) {
    return '<div class="row">' +
        col("col-12 col-sm-6 col-lg-3 p-1", CARDS.hero(c)) +
        col("col-12 col-sm-6 col-lg-3 p-1", CARDS.fullArt(c)) +
        col("col-12 col-sm-6 col-lg-3 p-1", CARDS.move(c)) +
        col("col-12 col-sm-6 col-lg-3", stack([CARDS.weapon(c), CARDS.stat(c)])) +
      '</div>' +
      '<div class="row">' +
        col("col-12 col-lg-4 p-1", CARDS.role(c, "h-100 wide")) +
        col("col-12 col-lg-4 p-1", CARDS.landscape(c)) +
        col("col-12 col-lg-4 p-1", CARDS.location(c)) +
      '</div>' +
      '<div class="row">' +
        col("col-12 p-1", CARDS.favorites(c, "spread")) +
      '</div>' +
      unitsRow(c);
  }

};

function bindImages() {
  document.querySelectorAll('img[data-img]').forEach(function (img) {
    var base = img.dataset.img;
    var i = 0;

    img.onload = function () {
      var ph = img.parentNode.querySelector('.img-ph');
      if (ph) { ph.remove(); }
    };
    img.onerror = function () {
      i += 1;
      if (i < IMG_EXTS.length) { img.src = base + IMG_EXTS[i]; } else { img.remove(); }
    };
    img.src = base + IMG_EXTS[0];
  });
}

function renderProfile(characterKey, layoutName) {
  var character = CHARACTERS[characterKey];
  var parent = document.getElementById("parent");
  var layout = LAYOUTS[layoutName];

  if (!character || !parent || !layout) { return; }

  parent.innerHTML = layout(character);
  bindImages();
}

var PICKER = {

  head: function (title, lead) {
    return '<div class="col-12 p-1 pt-2">' +
      '<h1 class="serif picker-title mb-1">' + title + '</h1>' +
      '<p class="picker-lead mb-3">' + lead + '</p>' +
    '</div>';
  },

  card: function (c) {
    return '<div class="col-12 col-md-6 col-lg-4 p-1">' +
      '<a class="card p-1 tall t-dark t-hero picker-card" href="' + c.page + '">' +
        media(c.portrait, "", c.portrait.focus) +
        '<div class="inner glass">' +
          '<h2 class="serif hero-name mb-0">' + c.name + '</h2>' +
          '<div class="accent serif" style="letter-spacing:.08em">' + c.epithet + '</div>' +
          '<small>' + c.subtitle + '</small>' +
          '<p class="picker-blurb mb-0">' + c.blurb + '</p>' +
          '<span class="chip picker-chip">View Profile &rarr;</span>' +
        '</div>' +
      '</a>' +
    '</div>';
  }

};

function renderSelect(title, lead) {
  var parent = document.getElementById("parent");
  if (!parent) { return; }

  parent.innerHTML = PICKER.head(title, lead) + Object.keys(CHARACTERS).map(function (key) {
    return PICKER.card(CHARACTERS[key]);
  }).join("");

  bindImages();
}
