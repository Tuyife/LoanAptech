const mongoose = require('mongoose');
require('dotenv').config();

console.log('🔍 Testing MongoDB connection...');
console.log('Connection string (hidden password):', process.env.MONGODB_URI?.replace(/\/\/([^:]+):([^@]+)@/, '//***:***@'));
console.log('');

mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log('✅ SUCCESS! MongoDB connected!');
    process.exit(0);
})
.catch(err => {
    console.log('❌ FAILED! Error details:');
    console.log('Error name:', err.name);
    console.log('Error message:', err.message);
    console.log('');
    console.log('💡 Possible solutions:');
    console.log('1. Check your IP is whitelisted in MongoDB Atlas');
    console.log('2. Verify username/password are correct');
    console.log('3. Make sure the cluster name "cluster0.d9qudb8" is correct');
    process.exit(1);
});