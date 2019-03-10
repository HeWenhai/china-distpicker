/*!
 * Distpicker v2.0.4
 * https: //fengyuanchen.github.io/distpicker
 *
 * Copyright 2014-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2018-06-01T12: 33: 03.031Z
 */

import $ from 'jquery';

var DEFAULTS = {
  // Selects the districts automatically.
  // 0 -> Disable autoselect
  // 1 -> Autoselect province only
  // 2 -> Autoselect province and city only
  // 3 -> Autoselect all (province, city and district)
  autoselect: 0,

  // Show placeholder.
  placeholder: true,

  // Select value. Options: 'name' and 'code'
  valueType: 'name',

  // Defines the initial value of province.
  province: '—— 省 ——',

  // Defines the initial value of city.
  city: '—— 市 ——',

  // Defines the initial value of district.
  district: '—— 区 ——'
};

var DISTRICTS = {
  100000: {
    120000: "Phnom Penh",
    310000: "Banteay Meanchey",
    320000: "Battambang",
    330000: "Kampong Cham",
    340000: "Kampong Chhnang",
    350000: "Kampong Speu",
    360000: "Kampong Thom",
    370000: "Kampot",
    380000: "Kandal",
    390000: "Koh Kong",
    260000: "Kratié",
    110000: "Mondulkiri",
    130000: "Preah Vihear",
    140000: "Prey Veng",
    150000: "Pursat",
    160000: "Ratanakiri",
    170000: "Siem Reap",
    180000: "Sihanoukville",
    190000: "Stung Treng",
    200000: "Svay Rieng",
    210000: "Takéo",
    220000: "Oddar Meanchey",
    230000: "Kep",
    240000: "Pailin",
    250000: "Tboung Khmum"
  },
  120000: {
    120100: "Chamkar Mon Section",
    120200: "Doun Penh Section",
    120300: "Prampir Meakkakra Section",
    120400: "Tuol Kouk Section",
    120500: "Dangkao Section",
    120600: "Mean Chey Section",
    120700: "Russey Keo Section",
    120800: "Sen Sok Section",
    120900: "Pou Senchey Section",
    121000: "Chrouy Changvar Section",
    121100: "Preaek Pnov Section",
    121200: "Chbar Ampov Section"
  },
  310000: {
    310200: "Mongkol Borei",
    310300: "Phnum Srok",
    310400: "Preah Netr Preah",
    310500: "Ou Chrov",
    310600: "Serei Saophoan Municipality",
    310700: "Thma Puok",
    310800: "Svay Chek",
    310900: "Malai",
    311000: "Paoy Paet Municipality"
  },
  320000: {
    320100: "Banan",
    320200: "Thma Koul",
    320300: "Battambang Municipality",
    320400: "Bavel",
    320500: "Ek Phnom",
    320600: "Moung Ruessi",
    320700: "Rotanak Mondol",
    320800: "Sangkae",
    320900: "Samlout",
    321000: "Sampov Loun",
    321100: "Phnum Proek",
    321200: "Kamrieng",
    321300: "Koas Krala",
    321400: "Rukhak Kiri"
  },
  330000: {
    330100: "Batheay",
    330200: "Chamkar Leu",
    330300: "Cheung Prey",
    330500: "Kampong Cham Municipality",
    330600: "Kampong Siem",
    330700: "Kang Meas",
    330800: "Koh Sotin",
    331300: "Prey Chhor",
    331400: "Srey Santhor",
    331500: "Stueng Trang"
  },
  340000: {
    340100: "Baribour",
    340200: "Chol Kiri",
    340300: "Kampong Chhnang Municipality",
    340400: "Kampong Leaeng",
    340500: "Kampong Tralach",
    340600: "Rolea B'ier",
    340700: "Sameakki Mean Chey",
    340800: "Tuek Phos"
  },
  350000:{
    350100: "Basedth",
    350200: "Chbar Mon Municipality",
    350300: "Kong Pisei",
    350400: "Aoral",
    350500: "Odongk",
    350600: "Phnom Sruoch",
    350700: "Samraong Tong",
    350800: "Thpong"
  },
  360000:{
    360100: "Baray",
    360200: "Kampong Svay",
    360300: "Stueng Saen Municipality",
    360400: "Prasat Balangk",
    360500: "Prasat Sambour",
    360600: "Sandaan",
    360700: "Santuk",
    360800: "Stoung"
  },
  370000:{
    370100: "Angkor Chey",
    370200: "Banteay Meas",
    370300: "Chhuk",
    370400: "Chum Kiri",
    370500: "Dang Tong",
    370600: "Kampong Trach",
    370700: "Tuek Chhou",
    370800: "Kampot Municipality"
  },
  380000:{
    380100: "Kandal Stueng",
    380200: "Kien Svay",
    380300: "Khsach Kandal",
    380400: "Kaoh Thum",
    380500: "Leuk Daek",
    380600: "Lvea Aem",
    380700: "Mukh Kampul",
    380800: "Angk Snuol",
    380900: "Ponhea Lueu",
    381000: "S'ang",
  },
  390000:{
    390100: "Botum Sakor",
    390200: "Kiri Sakor",
    390300: "Khemara Phoumin Municipality",
    390400: "Smach Mean Chey",
    390500: "Mondol Seima",
    390600: "Srae Ambel",
    390700: "Thma Bang",
  },
  260000:{
    260100: "Chhloung",
    260200: "Kratié Municipality",
    260300: "Preaek Prasab",
    260400: "Sambour",
    260500: "Snuol",
    260600: "Chitr Borie",
  },
  110000:{
    110100: "Kaev Seima",
    110200: "Kaoh Nheaek",
    110300: "Ou Reang",
    110400: "Pechr Chenda",
    110500: "Saen Monourom Municipality"
  },
  130000:{
    130100: "Chey Saen",
    130200: "Chhaeb",
    130300: "Choam Khsant",
    130400: "Kuleaen",
    130500: "Rovieng",
    130600: "Sangkom Thmei",
    130700: "Tbaeng Mean Chey"
  },
  140000:{
    140100: "Ba Phnum",
    140200: "Kamchay Mear",
    140300: "Kampong Trabaek",
    140400: "Kanhchriech",
    140500: "Me Sang",
    140600: "Peam Chor",
    140700: "Peam Ro",
    140800: "Pea Reang",
    140900: "Preah Sdach",
    141000: "Prey Veaeng Municipality",
    141100: "Kampong Leav",
    141200: "Sithor Kandal",
    141300: "Pea Reang"
  },
  150000:{
    150100: "Bakan",
    150200: "Kandieng",
    150300: "Krakor",
    150400: "Phnum Kravanh",
    150500: "Pursat Municipality",
    150600: "Veal Veaeng"
  },
  160000:{
    160100: "Andoung Meas",
    160200: "Banlung Municipality",
    160300: "Bar Kaev",
    160400: "Koun Mom",
    160500: "Lumphat",
    160600: "Ou Chum",
    160700: "Ou Ya Dav",
    160800: "Ta Veaeng",
    160900: "Veun Sai"
  },
  170000:{
    170100: "Angkor Chum",
    170200: "Angkor Thom",
    170300: "Banteay Srei",
    170400: "Chi Kraeng",
    170500: "Kralanh",
    170600: "Puok",
    170700: "Prasat Bakong",
    170800: "Siem Reap Municipality",
    170900: "Sout Nikom",
    171000: "Srei Snam",
    171100: "Svay Leu",
    171200: "Varin"
  },
  180000:{
    180100: "Preah Sihanouk Municipality",
    180200: "Prey Nob",
    180300: "Stueng Hav",
    180400: "Kampong Seila"
  },
  190000:{
    190100: "Sesan",
    190200: "Siem Bouk",
    190300: "Siem Pang",
    190400: "Stung Treng Municipality",
    190500: "Thala Barivat"
  },
  200000:{
    200100: "Chantrea",
    200200: "Kampong Rou",
    200300: "Rumduol",
    200400: "Romeas Haek",
    200500: "Svay Chrum",
    200600: "Svay Rieng Municipality",
    200700: "Svay Teab",
    200800: "Bavet Municipality"
  },
  210000:{
    210100: "Angkor Borei",
    210200: "Bati",
    210300: "Bourei Cholsar",
    210400: "Kiri Vong",
    210500: "Kaoh Andaet",
    210600: "Prey Kabbas",
    210700: "Samraong",
    210800: "Doun Kaev Municipality",
    210900: "Tram Kak",
    211000: "Treang"
  },
  220000:{
    220100: "Anlong Veaeng",
    220200: "Banteay Ampil",
    220300: "Chong Kal",
    220400: "Samraong Municipality",
    220500: "Trapeang Prasat"
  },
  230000:{
    230100: "Damnak Chang'aeur",
    230200: "Kep Municipality"
  },
  240000:{
    240100: "Pailin Municipality",
    240200: "Sala Krau"
  },
  250000:{
    250400: "Dambae",
    250900: "Krouch Chhmar",
    251000: "Memot",
    251100: "Ou Reang Ov",
    251200: "Ponhea Kraek",
    251600: "Tboung Khmum",
    251700: "Suong Municipality"
  }
};

var WINDOW       = typeof window !== 'undefined' ? window : {};
var NAMESPACE    = 'distpicker';
var EVENT_CHANGE = 'change';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DEFAULT_CODE = 100000;
var PROVINCE     = 'province';
var CITY         = 'city';
var DISTRICT     = 'district';

var Distpicker = function () {
  function Distpicker(element, options) {
    _classCallCheck(this, Distpicker);

    this.$element     = $(element);
    this.options      = $.extend({}, DEFAULTS, $.isPlainObject(options) && options);
    this.placeholders = $.extend({}, DEFAULTS);
    this.ready        = false;
    this.init();
  }

  _createClass(Distpicker, [{
    key  : 'init',
    value: function init() {
      var _this = this;

      var options = this.options;

      var $selects = this.$element.find('select');
      var length   = $selects.length;

      var data = {};

      $selects.each(function (i, select) {
        return $.extend(data, $(select).data());
      });

      $.each([PROVINCE, CITY, DISTRICT], function (i, type) {
        if (data[type]) {
          options[type]       = data[type];
          _this  ['$' + type] = $selects.filter('[data-' + type + ']');
        } else {
          _this['$' + type] = length > i ? $selects.eq(i) : null;
        }
      });

      this.bind();

      // Reset all the selects (after event binding)
      this.reset();
      this.ready = true;
    }
  }, {
    key  : 'bind',
    value: function bind() {
      var _this2 = this;

      if (this.$province) {
        this.$province.on(EVENT_CHANGE, this.onChangeProvince = $.proxy(function () {
          _this2.output(CITY);
          _this2.output(DISTRICT);
        }, this));
      }

      if (this.$city) {
        this.$city.on(EVENT_CHANGE, this.onChangeCity = $.proxy(function () {
          return _this2.output(DISTRICT);
        }, this));
      }
    }
  }, {
    key  : 'unbind',
    value: function unbind() {
      if (this.$province) {
        this.$province.off(EVENT_CHANGE, this.onChangeProvince);
      }

      if (this.$city) {
        this.$city.off(EVENT_CHANGE, this.onChangeCity);
      }
    }
  }, {
    key  : 'output',
    value: function output(type) {
      var options      = this.options,
          placeholders = this.placeholders;

      var $select = this['$' + type];

      if (!$select || !$select.length) {
        return;
      }

      var code = void 0;

      switch (type) {
        case PROVINCE: 
          code = DEFAULT_CODE;
          break;

        case CITY: 
          code = this.$province && (this.$province.find(':selected').data('code') || '');
          break;

        case DISTRICT: 
          code = this.$city && (this.$city.find(':selected').data('code') || '');
          break;
      }

      var districts = this.getDistricts(code);
      var value     = options[type];
      var data      = [];
      var matched   = false;

      if ($.isPlainObject(districts)) {
        $.each(districts, function (i, name) {
          var selected = name === value;

          if (options.valueType === 'code') {
            selected = i === String(value);
          }

          if (selected) {
            matched = true;
          }

          data.push({
            code    : i,
            name    : name,
            value   : options.valueType === 'name' ? name: i,
            selected: selected
          });
        });
      }

      if (!matched) {
        var autoselect = options.autoselect || options.autoSelect;

        if (data.length && (type === PROVINCE && autoselect > 0 || type === CITY && autoselect > 1 || type === DISTRICT && autoselect > 2)) {
          data[0].selected = true;
        }

        // Save the unmatched value as a placeholder at the first output
        if (!this.ready && value) {
          placeholders[type] = value;
        }
      }

      // Add placeholder option
      if (options.placeholder) {
        data.unshift({
          code    : '',
          name    : placeholders[type],
          value   : '',
          selected: false
        });
      }

      if (data.length) {
        $select.html(this.getList(data));
      } else {
        $select.empty();
      }

      $select.trigger(EVENT_CHANGE);
    }

    // eslint-disable-next-line class-methods-use-this

  }, {
    key  : 'getList',
    value: function getList(data) {
      var list = [];

      $.each(data, function (i, n) {
        var attrs = ['data-code="' + n.code + '"', 'data-text="' + n.name + '"', 'value="' + n.value + '"'];

        if (n.selected) {
          attrs.push('selected');
        }

        list.push('<option ' + attrs.join(' ') + '>' + n.name + '</option>');
      });

      return list.join('');
    }

    // eslint-disable-next-line class-methods-use-this

  }, {
    key  : 'getDistricts',
    value: function getDistricts() {
      var code = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_CODE;

      return DISTRICTS[code] || null;
    }
  }, {
    key  : 'reset',
    value: function reset(deep) {
      if (!deep) {
        this.output(PROVINCE);
        this.output(CITY);
        this.output(DISTRICT);
      } else if (this.$province) {
        this.$province.find(':first').prop('selected', true).end().trigger(EVENT_CHANGE);
      }
    }
  }, {
    key  : 'destroy',
    value: function destroy() {
      this.unbind();
    }
  }], [{
    key  : 'setDefaults',
    value: function setDefaults(options) {
      $.extend(DEFAULTS, $.isPlainObject(options) && options);
    }
  }]);

  return Distpicker;
}();

if ($.fn) {
  var AnotherDistpicker = $.fn.distpicker;

  $.fn.distpicker = function jQueryDistpicker(option) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var result = void 0;

    this.each(function (i, element) {
      var $element   = $(element);
      var isDestroy  = option === 'destroy';
      var distpicker = $element.data(NAMESPACE);

      if (!distpicker) {
        if (isDestroy) {
          return;
        }

        var options = $.extend({}, $element.data(), $.isPlainObject(option) && option);

        distpicker = new Distpicker(element, options);
        $element.data(NAMESPACE, distpicker);
      }

      if (typeof option === 'string') {
        var fn = distpicker[option];

        if ($.isFunction(fn)) {
          result = fn.apply(distpicker, args);

          if (isDestroy) {
            $element.removeData(NAMESPACE);
          }
        }
      }
    });

    return typeof result === 'undefined' ? this: result;
  };

  $.fn.distpicker.Constructor = Distpicker;
  $.fn.distpicker.setDefaults = Distpicker.setDefaults;

  $.fn.distpicker.noConflict = function noConflict() {
    $.fn.distpicker = AnotherDistpicker;
    return this;
  };
}

if (WINDOW.document) {
  $(function () {
    $('[data-toggle="' + NAMESPACE + '"]').distpicker();
  });
}
