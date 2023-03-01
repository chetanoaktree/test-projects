'use client';
import { Card, Row, Col } from 'antd';


const { Meta } = Card;

const gridStyle = {
    width: '100%'
};

const PokemonCardDetail = (props) => (
    <>
    <Row>
        <Col span={12}>
            <Card
            cover={
            <img
                alt={props.name}
                src={props.ThumbnailImage}
            />
            }
            bordered={false}
            >
            </Card>
        </Col>
        <Col span={12}>
            <Card>
                <Card.Grid style={gridStyle}>Abilities: {props.abilities.join(', ')}</Card.Grid>
                <Card.Grid style={gridStyle}>Type: {props.type.join(', ')}</Card.Grid>
                <Card.Grid style={gridStyle}>Weakness: {props.weakness.join(', ')}</Card.Grid>
                <Card.Grid style={gridStyle}>Height: {props.height}</Card.Grid>
                <Card.Grid style={gridStyle}>Weight: {props.weight}</Card.Grid>
                
            </Card>
        </Col>
    </Row>
    </>
);
export default PokemonCardDetail;

