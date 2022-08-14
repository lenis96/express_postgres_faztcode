import { Project } from '../models/Project.js'
import { Task } from '../models/Task.js'

export const getProjects = async (req, res) => {
    try {

        // throw Error('a monkey has destoyed the server')
        const projects = await Project.findAll()
        res.json(projects)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const getProject = async (req, res) => {
    try {
        const { id } = req.params;
        // throw Error('a monkey has destoyed the server')
        const project = await Project.findOne({
            where: {
                id
            }
        })

        if (!project) return res.status(404).json({ message: 'project not found' })
        res.json(project)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const createProject = async (req, res) => {
    try {
        const { name, priority, description } = req.body
        const newProject = await Project.create({
            name,
            description,
            priority
        })
        // console.log(newProject)
        res.json(newProject)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const updateProject = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, priority, description } = req.body;

        const project = await Project.findByPk(id)
        // console.log(project)
        project.name = name;
        project.priority = priority;
        project.description = description;
        await project.save()
        res.json(project)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const deleteProject = async (req, res) => {
    try {

        const { id } = req.params;
        await Project.destroy({
            where: {
                id: id
            }
        })
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}

export const getProjectTasks = async (req, res) => {
    try {
        const {id} = req.params;
        const tasks = await Task.findAll({
            where:{
                projectId:id
            }
        })
        res.json(tasks)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}