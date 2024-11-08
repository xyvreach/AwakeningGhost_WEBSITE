import mongoose from "mongoose";

// Function to validate the array length for image URLs
function arrayLimit(val) {
  return val.length <= 5;  // Limit the array to 5 elements
}

const sizeSchema = mongoose.Schema({
  size: {
    type: String,
    enum: ['S', 'M', 'L', 'XL', 'XXL'],  // Adjust size options as needed
    required: true,
  },
  stock_quantity: {
    type: Number,
    required: true,
    min: 0,
  },
});

const merchItemSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      required: true,
      default: 'USD',
    },
    category: {
      type: String,
      enum: ['Apparel', 'Accessories', 'Vinyl', 'Other'],
      required: true,
    },
    sizes: [sizeSchema], // Updated sizes field
    colors: {
      type: [String],  // e.g., ['Black', 'White', 'Red']
    },
    image_urls: {
      type: [String],  // Array of image URLs
      validate: [arrayLimit, '{PATH} exceeds the limit of 5'],  // Limiting to 5 images max
    },
    // Remove general stock_quantity since we're tracking it per size
    // stock_quantity: {
    //   type: Number,
    //   required: true,
    //   min: 0,
    // },
    sku: {
      type: String,  // Stock Keeping Unit, unique per item
      unique: true,
    },
    is_featured: {
      type: Boolean,
      default: false,
    },
    release_date: {
      type: Date,
      default: Date.now,
    },
    on_sale: {
      type: Boolean,
      default: false,
    },
    sale_price: {
      type: Number,
      validate: {
        validator: function (value) {
          return value < this.price;
        },
        message: 'Sale price ({VALUE}) should be less than the original price',
      },
    },
    tags: {
      type: [String],  // Tags like ['limited edition', 'tour']
    },
    shipping_options: [{
      method: {
        type: String,
        required: true,
      },
      cost: {
        type: Number,
        required: true,
        min: 0,
      },
      estimated_delivery: {
        type: String,
      },
    }],
  },
  {
    timestamps: true,
  }
);

export const MerchItem = mongoose.model('Merch', merchItemSchema);
