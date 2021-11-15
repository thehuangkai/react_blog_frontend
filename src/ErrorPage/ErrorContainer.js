import React from "react"
import { Result, Button } from 'antd';
import "antd/dist/antd.css";

const ErrorContainer = props => {

    return (
        <div className="body">
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
            />
        </div>
    )
}
export default ErrorContainer