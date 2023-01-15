import { Button, Card, Icon} from 'semantic-ui-react'
import { Link } from 'react-router-dom';

function ProjectElement ({name}) {


    return (
        <div className="projects">
            <Card>
                <Card.Content header={name} />
                <Card.Content extra>
                    <Link to="/project">
                        <Button>Project</Button>
                    </Link>
                    <Link to="/materials"> 
                        <Button>Materials</Button>
                    </Link>
                </Card.Content>
            </Card>
         </div>
    )
}

export default ProjectElement;

{/* <Button icon>
    <Icon name="building" />
</Button>
<Button icon>
    <Icon name="dolly flatbed" />
</Button> */}

{/* <Button animated>
    <Button.Content visible>
        <Icon name='dolly' />
    </Button.Content>
    <Button.Content hidden>Materials</Button.Content>
</Button> */}