'use client';
import Image from 'next/image'
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
        <Image
          alt={props.name}
          src={props.ThumbnailImage}
          width={300}
          height={300}

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

