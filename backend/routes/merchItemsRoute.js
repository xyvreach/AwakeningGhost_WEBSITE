import express from 'express';
import { MerchItem } from '../models/merchItemModel.js';

const router = express.Router();

// Route to Create a new Merch Item
router.post('/', async (request, response) => {
  try {
    const {
      title,
      description,
      price,
      currency,
      category,
      sizes,  // Now expects an array of size objects
      colors,
      image_urls,
      sku,
      is_featured,
      release_date,
      on_sale,
      sale_price,
      tags,
      shipping_options,
    } = request.body;

    // Validation for required fields
    if (
      !title ||
      !description ||
      !price ||
      !category ||
      !sku ||
      !sizes || sizes.length === 0
    ) {
      return response.status(400).send({
        message: 'Please send all required fields: title, description, price, category, sizes, sku',
      });
    }

    // Validate sizes array
    const validSizes = sizes.every(sizeObj => {
      return (
        ['S', 'M', 'L', 'XL', 'XXL'].includes(sizeObj.size) &&
        typeof sizeObj.stock_quantity === 'number' &&
        sizeObj.stock_quantity >= 0
      );
    });

    if (!validSizes) {
      return response.status(400).send({
        message: 'Invalid sizes format or stock quantities',
      });
    }

    const newMerchItem = {
      title,
      description,
      price,
      currency,
      category,
      sizes,
      colors,
      image_urls,
      sku,
      is_featured,
      release_date,
      on_sale,
      sale_price,
      tags,
      shipping_options,
    };

    const merchItem = await MerchItem.create(newMerchItem);

    return response.status(201).send(merchItem);
  } catch (error) {
    console.error('Error creating merch item:', error.message);
    return response.status(500).send({ message: error.message });
  }
});

// Route to Get All Merch Items from database
router.get('/', async (request, response) => {
  try {
    const merchItems = await MerchItem.find({});

    return response.status(200).json({
      count: merchItems.length,
      data: merchItems,
    });
  } catch (error) {
    console.error('Error fetching merch items:', error.message);
    return response.status(500).send({ message: error.message });
  }
});

// Route to Get a Single Merch Item by ID
router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const merchItem = await MerchItem.findById(id);

    if (!merchItem) {
      return response.status(404).json({ message: 'Merch Item not found' });
    }

    return response.status(200).json(merchItem);
  } catch (error) {
    console.error('Error fetching merch item:', error.message);
    return response.status(500).send({ message: error.message });
  }
});

// Route to Update a Merch Item
router.put('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const {
      title,
      description,
      price,
      category,
      sizes,
      sku,
      // ... other fields
    } = request.body;

    // Validation for required fields
    if (
      !title ||
      !description ||
      !price ||
      !category ||
      !sku ||
      !sizes || sizes.length === 0
    ) {
      return response.status(400).send({
        message: 'Please send all required fields: title, description, price, category, sizes, sku',
      });
    }

    // Validate sizes array
    const validSizes = sizes.every(sizeObj => {
      return (
        ['S', 'M', 'L', 'XL', 'XXL'].includes(sizeObj.size) &&
        typeof sizeObj.stock_quantity === 'number' &&
        sizeObj.stock_quantity >= 0
      );
    });

    if (!validSizes) {
      return response.status(400).send({
        message: 'Invalid sizes format or stock quantities',
      });
    }

    const updatedData = {
      title,
      description,
      price,
      category,
      sizes,
      sku,
      // Include other fields if necessary
    };

    const updatedMerchItem = await MerchItem.findByIdAndUpdate(id, updatedData, { new: true });

    if (!updatedMerchItem) {
      return response.status(404).json({ message: 'Merch Item not found' });
    }

    return response.status(200).json({ message: 'Merch Item updated successfully', data: updatedMerchItem });
  } catch (error) {
    console.error('Error updating merch item:', error.message);
    return response.status(500).send({ message: error.message });
  }
});

// Route to Delete a Merch Item
router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const deletedMerchItem = await MerchItem.findByIdAndDelete(id);

    if (!deletedMerchItem) {
      return response.status(404).json({ message: 'Merch Item not found' });
    }

    return response.status(200).json({ message: 'Merch Item deleted successfully' });
  } catch (error) {
    console.error('Error deleting merch item:', error.message);
    return response.status(500).send({ message: error.message });
  }
});

export default router;
