import React from 'react';
import { Row ,Col,Typography,Button ,Grid} from 'antd';


const Header = () => {

    
  const { useBreakpoint } = Grid;
  const screen = useBreakpoint();



    const { Title } = Typography;

    return(

        screen['sm'] ? <Row>
            <Col  span={14}>
                 <Title level={3}>Welcome to Ourway </Title>

            </Col>
            <Col span={10} style={{display:'flex',alignItems:'end'}} >
               
               <Row style={{width:'100%',height:'100%'}} >
                   <Col span={16} >
                       <p style={{fontWeight:600,fontSize:'20px',position:'absolute',right:"0",top:'50%',transform:'translateY(-50%)'}}>Akash Maurya</p>
                   </Col>
                   <Col span={8} style={{position:'relative'}}>
                        <Button style={{position:'absolute',right:'2%',top:'50%',transform:'translateY(-50%)'}} type="primary">Logout</Button>
                   </Col>
               </Row>

            </Col>
        </Row>: <Row>
            
            <Col span={24} >
               
                    <Row style={ {padding:'20px'}}>
                   <Col span={16} >
                       <p style={{fontWeight:600,fontSize:'20px',position:'absolute',left:"0",top:'50%',transform:'translateY(-50%)'}}>Akash Maurya</p>
                   </Col>
                   <Col span={8} style={{position:'absolute',right:'2%',top:'50%',transform:'translateY(-50%)'}}>
                        <Button  type="primary">Logout</Button>
                   </Col>
               </Row>

            </Col>

                <Col span={ 24 } style={ {display:'flex',justifyContent:'center'}}>
                 <Title level={3}>Welcome to Ourway </Title>

            </Col>

        </Row>
        
    )

}

export default Header;