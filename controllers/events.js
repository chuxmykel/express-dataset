let Models = require('../models');

let getAllEvents = (req, res) => {
	Models.Event.findAll({
		attributes: ['id', 'type', 'created_at'],
		include: [
			{ model: Models.Actor, as: 'actor', attributes: ['id', 'login', 'avatar_url'] },
			{ model: Models.Repo, as: 'repo', attributes: ['id', 'name', 'url'] }
		],
	})
		.then(data => res.status(200).json(data));
};

let addEvent = (req, res) => {
	Models.Event.findByPk(req.body.id)
		.then(data => {
			if(data) {
				return res.status(400).json({
					error: `Event with id: ${req.body.id} already exists`
				});
			}

			Models.Actor.findOrCreate({ where: req.body.actor })
			.then(res => Models.Repo.findOrCreate({ where: req.body.repo }))
			.then(res => Models.Event.create({
				id: req.body.id,
				type: req.body.type,
				actor_id: req.body.actor.id,
				repo_id: req.body.repo.id,
				created_at: req.body.created_at,
			}))
			.then(data => res.status(201).json({
				message: 'Event created successfully'
			}));
		});
};


let getByActor = (req, res) => {
	Models.Actor.findByPk(req.params.actorID)
		.then(data => {
			if(data === null) {
				return res.status(404).json({
					error: `Actor with id: ${req.params.actorID} not found`,
				});
			}

			Models.Event.findOne({
				where: { actor_id: req.params.actorID },
				attributes: ['id', 'type', 'created_at'],
				include: [
					{ model: Models.Actor, as: 'actor', attributes: ['id', 'login', 'avatar_url'] },
					{ model: Models.Repo, as: 'repo', attributes: ['id', 'name', 'url'] }
				],
			}).then(data => res.status(200).json([data]))
		});
}


let eraseEvents = (req, res) => {
	Models.Event.destroy({ where: {} });
	return res.status(200).json({});
};

module.exports = {
	getAllEvents,
	addEvent,
	getByActor,
	eraseEvents,
};

















