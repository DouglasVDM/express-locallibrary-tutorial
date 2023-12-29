const Bookinstance = require("../models/bookinstance");
const asyncHandler = require("express-async-handler");

// Display list of all Bookinstances
exports.bookinstance_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Bookinstance list");
});

// Display detail page for a specific Bookinstance
exports.bookinstance_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: Bookinstance detail:${req.params.id}`);
});

// Display Bookinstance create form on GET
exports.bookinstance_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Bookinstance create GET");
});

// Handle Bookinstance create on POST
exports.bookinstance_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Bookinstance create POST");
});

// Display Bookinstance delete form on GET
exports.bookinstance_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Bookinstance delete GET");
});

// Handle Bookinstance delete on POST
exports.bookinstance_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Bookinstance delete POST");
});

// Display Bookinstance update form on GET
exports.bookinstance_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Bookinstance update GET");
});

// Handle Bookinstance update on POST
exports.bookinstance_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Bookinstance update POST");
});
