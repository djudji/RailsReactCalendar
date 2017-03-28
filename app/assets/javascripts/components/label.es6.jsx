class Label extends React.Component {
  render () {
    return (
      <div className="vspace-10">
        <div>{this.props.label}</div>
      </div>
    );
  }
}

Label.propTypes = {
  label: React.PropTypes.string
};
