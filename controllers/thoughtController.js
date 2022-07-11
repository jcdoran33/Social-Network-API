const { Video, User } = require('../models');

module.exports = {
  //GET all thoughts
  getVideos(req, res) {
    Video.find()
      .then((videos) => res.json(videos))
      .catch((err) => res.status(500).json(err));
  },
  //GET single thought by its _id
  getSingleVideo(req, res) {
    Video.findOne({ _id: req.params.videoId })
      .then((video) =>
        !video
          ? res.status(404).json({ message: 'No video with that ID' })
          : res.json(video)
      )
      .catch((err) => res.status(500).json(err));
  },
  // POST to create a new thought (don't forget to push the created thought's _id to the associated user's throughts array field)
  createVideo(req, res) {
    Video.create(req.body)
      .then((video) => {
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $addToSet: { videos: video._id } },
          { new: true }
        );
      })
      .then((user) =>
        !user
          ? res.status(404).json({
              message: 'Video created, but found no user with that ID',
            })
          : res.json('Created the video 🎉')
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  //PUT to update a thought by its _id
  updateVideo(req, res) {
    Video.findOneAndUpdate(
      { _id: req.params.videoId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((video) =>
        !video
          ? res.status(404).json({ message: 'No video with this id!' })
          : res.json(video)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  //DELETE to remove a though by its _id
  deleteVideo(req, res) {
    Video.findOneAndRemove({ _id: req.params.videoId })
      .then((video) =>
        !video
          ? res.status(404).json({ message: 'No video with this id!' })
          : User.findOneAndUpdate(
              { videos: req.params.videoId },
              { $pull: { videos: req.params.videoId } },
              { new: true }
            )
      )
      .then((user) =>
        !user
          ? res
              .status(404)
              .json({ message: 'Video created but no user with this id!' })
          : res.json({ message: 'Video successfully deleted!' })
      )
      .catch((err) => res.status(500).json(err));
  },
  //====================================
  //enpoint for two below: /api/thoughts/:thoughtId/reactions - will direct here (replace response with reactions)
  //====================================
  
  // Add a video response
  addVideoResponse(req, res) {
    Video.findOneAndUpdate(
      { _id: req.params.videoId },
      { $addToSet: { responses: req.body } },
      { runValidators: true, new: true }
    )
      .then((video) =>
        !video
          ? res.status(404).json({ message: 'No video with this id!' })
          : res.json(video)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Remove video response
  removeVideoResponse(req, res) {
    Video.findOneAndUpdate(
      { _id: req.params.videoId },
      { $pull: { reactions: { responseId: req.params.responseId } } },
      { runValidators: true, new: true }
    )
      .then((video) =>
        !video
          ? res.status(404).json({ message: 'No video with this id!' })
          : res.json(video)
      )
      .catch((err) => res.status(500).json(err));
  },
};
