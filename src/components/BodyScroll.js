import React from 'react'

class BodyScroll extends React.Component {
    static propTypes = {
        disablescroll: React.PropTypes.bool
    }
    static defaultProps = {
        disablescroll: false
    }
    componentDidMount() {
        document.body.classList.toggle('disablescroll', this.props.disablescroll)
    }
    componentWillReceiveProps(nextProps) {
        document.body.classList.toggle('disablescroll', nextProps.disablescroll)
    }
    componentWillUnmount() {
        document.body.classList.remove('disablescroll')
    }
    render() {
        return this.props.children
    }
}

export default BodyScroll;
