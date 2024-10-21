import express from 'express';
import { MerchItem } from '../models/merchItemModel.js';

const router = express.Router();

// Route to Create a new Merch Item
router.post('/', async (request, response) => {
    try {
        /*
        const {
            title,
            description,
            price,
            currency,
            category,
            sizes,
            colors,
            image_urls,
            stock_quantity,
            sku,
            is_featured,
            release_date,
            on_sale,
            sale_price,
            tags,
            shipping_options
        } = request.body;
        */
        // Validation for required fields
        if (
            !request.body.title ||
            !request.body.description ||
            !request.body.price ||
            !request.body.category ||
            !request.body.stock_quantity ||
            !request.body.sku
        ) {
            return response.status(400).send({
                message: 'Please send all required fields: title, description, price, category, stock_quantity, sku',
            });
        }

        const newMerchItem = {
            title: request.body.title,
            description: request.body.description,
            price: request.body.price,
            currency: request.body.currency,
            category: request.body.category,
            sizes: request.body.sizes,
            colors: request.body.colors,
            image_urls: request.body.image_urls,
            stock_quantity: request.body.stock_quantity,
            sku: request.body.sku,
            is_featured: request.body.is_featured,
            release_date: request.body.release_date,
            on_sale: request.body.on_sale,
            sale_price: request.body.sale_price,
            tags: request.body.tags,
            shipping_options: request.body.shipping_options,
        };

        const merchItem = await MerchItem.create(newMerchItem);

        return response.status(201).send(merchItem);
    } catch (error) {
        console.log(error.message);
        return response.status(500).send({ message: error.message });
    }
});

// Route to Get All Merch Items from database
router.get('/', async (request, response) => {
    try {
        const merchItems = await MerchItem.find({});

        return response.status(200).json({
            count: merchItems.length,
            data: merchItems
        });
    } catch (error) {
        console.log(error.message);
        return response.status(500).send({ message: error.message });
    }
});

// Route to Get ALL Merch Items from database

router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const merchItem = await MerchItem.findById(id);
        /*
        if (!merchItem) {
            return response.status(404).json({ message: 'Merch Item not found' });
        }
        */
        return response.status(200).json(merchItem);
    } catch (error) {
        console.log(error.message);
        return response.status(500).send({ message: error.message });
    }
});

// Route for Update a Merch Item
router.put('/:id', async (request, response) => {
    /*
    try {

        const { id } = request.params;

        const updatedMerchItem = await MerchItem.findByIdAndUpdate(id, request.body, { new: true });

        if (!updatedMerchItem) {
            return response.status(404).json({ message: 'Merch Item not found' });
        }

        return response.status(200).json({ message: 'Merch Item updated successfully', data: updatedMerchItem });
    }
    */
    try {
        if (
            !request.body.title ||
            !request.body.description ||
            !request.body.price ||
            !request.body.category ||
            !request.body.stock_quantity ||
            !request.body.sku
        ) {
            return response.status(400).send({
                message: 'Please send all required fields: title, description, price, category, stock_quantity, sku',
            });
        }

        const { id } = request.params;

        const result = await MerchItem.findByIdAndUpdate(id, request.body);

        if (!result) {
            return response.status(404).json({ message: 'MerchItem$updateroute not found' });
        }

        return response.status(200).send({ message: 'MerchItem$updateroute updated successfully' });

    } catch (error) {
        console.log(error.message);
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
        console.log(error.message);
        return response.status(500).send({ message: error.message });
    }
});

export default router;
