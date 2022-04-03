import React from 'react';

const Blogs = () => {
    return (
        <div style={{textAlign:'left'}}>
            <h1>What is the purpose of Context API???</h1>
            <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.The Context API is a React structure that enables to exchange unique details and assists in solving prop-drilling from all levels of application.</p>
            <h1>What is semantic tag???</h1>
            <p>Semantic HTML tags provide information about the contents of those tags that goes beyond just how they look on a page.HTML5 semantic tags define the purpose of the element. By using semantic markup, help the browser understand the meaning of the content instead of just displaying it. By providing this extra level of clarity, HTML5 semantic elements also help search engines to read the page and find the required information faster.</p>
            <h1>what are the difference among Inline,Block,Inline-block element???</h1>
            <p>Compared to display: inline , the major difference is that inline-block allows to set a width and height on the element. Also, with display: inline , top and bottom margins and paddings are not respected, and with display: inline-block they are.inline The element doesn't start on a new line and only occupy just the width it requires. You can't set the width or height. inline-block It's formatted just like the inline element, where it doesn't start on a new line.</p>

        </div>
    );
};

export default Blogs;