import ProjectDetailsProps from './project-details.prop';

export default function ProjectDetails({name}: ProjectDetailsProps) {
    return (
        <div>
            <h1>Project Details {name}</h1>
        </div>
    );
}