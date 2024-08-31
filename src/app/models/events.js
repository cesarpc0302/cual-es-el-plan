const mongoose = require('mongoose');

const pattern = new RegExp(
  '^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$',
  'i'
); // fragment locator

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    unique: true,
    maxlength: [80, 'Name too long'],
    minlenght: [3, 'Name too short'],
  },
  date: {
    start: {
      type: Date,
      required: [true, 'start date is required'],
      min: [Date.now(), 'Cannot be a past date'],
    },
    end: {
      type: Date,
      min: [Date.now(), 'Cannot be a past date'],
      validate: {
        validator: function (val) {
          return val > this.date.start;
        },
        message: 'end date error',
      },
    },
  },
  currency: {
    type: String,
    default: 'CRC',
    enum: {
      values: ['CRC', 'USD'],
      message: 'currency error',
    },
  },
  cover: {
    type: [Number],
    required: [true, 'cover is required'],
    min: [0, 'Cover can not be negative'],
    validate: {
      validator: function (val) {
        return val[0] < val[1];
      },
      message: 'max min cover error',
    },
  },
  description: {
    type: String,
    maxlength: [1500, 'description too long'],
  },
  location: {
    type: String,
    required: [true, 'location is required'],
  },
  type: {
    type: [String],
    required: [true, 'type is required'],
  },
  links: {
    type: String,
    required: [true, 'A link is required'],
    validate: {
      validator: function (val) {
        return pattern.test(val);
      },
      message: 'error in link format',
    },
  },
  creationDate: {
    type: Date,
    default: Date.now(),
  },
  userId: {
    type: String,
    default: 'Admin',
  },
  petFriendly: {
    type: Boolean,
    default: false,
  },
  featured: {
    type: Boolean,
    default: false,
  },
  datesFeatured: {
    start: {
      type: Date,
      min: [Date.now(), 'Cannot be a past date'],
    },
    end: {
      type: Date,
      min: [Date.now(), 'Cannot be a past date'],
      validate: {
        validator: function (val) {
          return val > this.datesFeatured.start;
        },
        message: 'features end date error',
      },
    },
  },
  image: [String],
  reviewed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.models.Events || mongoose.model('Events', eventSchema);
