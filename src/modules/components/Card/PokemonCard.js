'use client';
import { Avatar, Card } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';


const { Meta } = Card;
const PokemonCard = (props) => (

    <Card
    hoverable
    style={{
    width: 300,
    }}
    cover={
    <img
        alt={props.name}
        src={props.ThumbnailImage}
    />
    }
    actions={props.type}
    >
    <Meta
    title={props.name}
    />
    </Card>
);
export default PokemonCard;

