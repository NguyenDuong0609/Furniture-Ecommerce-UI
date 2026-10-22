import Link from "@/components/mobel/MobelLink";
import HomeLink from "@/components/mobel/HomeLink";

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  return (
    <>
      {/* Main header */}
      <section className="main-header main-header-blog" style={{ backgroundImage: "url(/mobel/assets/images/gallery-1.jpg)" }}>
        <header>
          <div className="container text-center">
            <h2 className="h2 title">Blog</h2>
            <ol className="breadcrumb breadcrumb-inverted">
              <li><HomeLink><span className="icon icon-home"></span></HomeLink></li>
              <li><Link href="/blog">Blog Category</Link></li>
              <li className="active">Decorating When You're...</li>
            </ol>
          </div>
        </header>
      </section>

      {/* Blog article */}
      <section className="blog">
        {/* Blog navigation */}
        <div className="blog-navigation">
          <a className="nav-link prev" href="/blog/the-3-tricks">
            <figure>
              <div className="image">
                <img src="/mobel/assets/images/blog-2.jpg" alt="Alternate Text" />
              </div>
              <figcaption>
                <div className="blog-title h6">The 3 Tricks that Quickly Became Rules</div>
              </figcaption>
            </figure>
          </a>
          <a className="nav-link next" href="/blog/dining-chair">
            <figure>
              <div className="image">
                <img src="/mobel/assets/images/blog-3.jpg" alt="Alternate Text" />
              </div>
              <figcaption>
                <div className="blog-title h6">What does your favorite dining chair say about you?</div>
              </figcaption>
            </figure>
          </a>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
              <div className="blog-post">
                {/* Blog main image */}
                <div className="blog-image-main">
                  <img src="/mobel/assets/images/blog-1.jpg" alt="" />
                </div>

                <div className="blog-post-content">
                  {/* Blog post title */}
                  <div className="blog-post-title">
                    <h1 className="blog-title">
                      Decorating When You're Starting Out or Starting Over
                    </h1>
                    <h2 className="blog-subtitle h5">
                      You've finally reached this point in your life- you've bought your first home, moved into
                      your very own apartment, moved out of the dorm room or you're finally downsizing after
                      all of your kids have left the nest.
                    </h2>

                    <div className="blog-info blog-info-top">
                      <div className="entry">
                        <i className="fa fa-user"></i>
                        <span>John Doe</span>
                      </div>
                      <div className="entry">
                        <i className="fa fa-calendar"></i>
                        <span>03.03.2017</span>
                      </div>
                      <div className="entry">
                        <i className="fa fa-comments"></i>
                        <span>4 comments</span>
                      </div>
                    </div>
                  </div>

                  {/* Blog post text */}
                  <div className="blog-post-text">
                    <h4>What do you like?</h4>
                    <p>
                      First things first, find out what you like. What makes you, you? More often than not we find
                      that people have been stuck in places where others have called the shots, you didn't
                      own the apartment/condo/house or your kids really dictated what you did and didn't furnish
                      your home with... cough, white couch, cough. Now it's your time to shine. Take a walk,
                      find out what colors speak to you. Pick up a few magazines and see if you really identify
                      with a particular style. Head over to Pinterest and create a board filled with things
                      you'd want in your new space.
                    </p>
                    <p><img src="/mobel/assets/images/blog-3.jpg" alt="This is an alternative image description." /></p>
                    <p>
                      If you're the kind of person who needs to see it all in person then head over to your closest
                      Mor Furniture for Less and check out the way we lay out rooms. We strategically put together
                      rooms for you with full sets of furniture. This way you don't have to imagine what a
                      finished room will look like.
                    </p>
                    <h4>Sketch out your floor plan</h4>
                    <p>
                      Now that you're the one calling all of the shots you can layout the room just the way you
                      like it. Take the time to sketch it out, come up with a few ideas and keep the extras
                      in your back pocket so you can give the room a refresh in a few months. If you're the
                      kind of person who needs to physically see how things layout then put those moving boxes
                      to good use and place them around the room as furniture.
                    </p>
                    <p><img src="/mobel/assets/images/blog-4.jpg" alt="This is an alternative image description." /></p>
                    <p>
                      If moving boxes sounds like too much work and your artist skills aren't exactly up to par
                      there are many different room builders and planners online. All you do is upload an image
                      of the room and start planning!
                    </p>
                    <h4>Choose your color palette</h4>
                    <p>
                      Your color palette can come from a variety of inspiration. There are designers out there
                      who say to take that inspiration from your floor color, others say to use a piece of
                      art, but one of the best ways to create the perfect space for you is to use an item that
                      you truly love. It could be anything from a favorite outfit you wear to a rug. Once your
                      color palette is chosen work backward adding in neutrals to break up the bolder colors.
                      Save the bright colors for the accent pieces, this way if you decide to change things
                      up in a few years you're not totally locked in.
                    </p>
                  </div>

                  {/* Blog info bottom */}
                  <div className="blog-info blog-info-bottom">
                    <ul>
                      <li className="divider"></li>
                      <li>
                        <i className="fa fa-folder-open"></i>
                        <span>
                          <a href="#">Furniture Blog</a>, <a href="#">Decorating ideas</a>, <a href="#">Modern living</a>, <a href="#">Floor plans</a>
                        </span>
                      </li>
                      <li>
                        <i className="fa fa-tag"></i>
                        <span>
                          <a href="#">Furniture</a>,
                          <a href="#">Decorating</a>,
                          <a href="#">Starting</a>,
                          <a href="#">Apartment</a>,
                          <a href="#">Sketch</a>,
                          <a href="#">Floor</a>,
                          <a href="#">Color</a>,
                          <a href="#">Interior</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Comments */}
                <div className="comments">
                  <div className="comment-header">
                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-google-plus"></i></a>
                    <a href="#"><i className="fa fa-pinterest"></i></a>
                    <a href="#"><i className="fa fa-linkedin"></i></a>
                  </div>

                  <div className="comment-wrapper">
                    {/* Comment 1 */}
                    <div className="comment-block">
                      <div className="comment-user">
                        <div><img src="/mobel/assets/images/user-2.jpg" alt="Alternate Text" width="70" /></div>
                        <div>
                          <h5>
                            John Doe
                            <a href="#" className="btn btn-sm btn-main pull-right"><i className="fa fa-reply"></i> Reply</a>
                            <small>03.05.2017</small>
                          </h5>
                        </div>
                      </div>
                      <div className="comment-desc">
                        <p>
                          In vestibulum tellus ut nunc accumsan eleifend. Donec mattis cursus ligula, id
                          iaculis dui feugiat nec. Etiam ut ante sed neque lacinia volutpat. Maecenas
                          ultricies tempus nibh, sit amet facilisis mauris vulputate in. Phasellus
                          tempor justo et mollis facilisis. Donec placerat at nulla sed suscipit. Praesent
                          accumsan, sem sit amet euismod ullamcorper, justo sapien cursus nisl, nec
                          gravida
                        </p>
                      </div>

                      {/* Reply */}
                      <div className="comment-block">
                        <div className="comment-user">
                          <div><img src="/mobel/assets/images/user-2.jpg" alt="Alternate Text" width="70" /></div>
                          <div>
                            <h5>
                              John Doe
                              <a href="#" className="btn btn-sm btn-main pull-right"><i className="fa fa-reply"></i> Reply</a>
                              <small>08.05.2017</small>
                            </h5>
                          </div>
                        </div>
                        <div className="comment-desc">
                          <p>
                            Curabitur sit amet elit quis tellus tincidunt efficitur. Cras lobortis id
                            elit eu vehicula. Sed porttitor nulla vitae nisl varius luctus. Quisque
                            a enim nisl. Maecenas facilisis, felis sed blandit scelerisque, sapien
                            nisl egestas diam, nec blandit diam ipsum eget dolor. Maecenas ultricies
                            tempus nibh, sit amet facilisis mauris vulputate in.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Comment 2 */}
                    <div className="comment-block">
                      <div className="comment-user">
                        <div><img src="/mobel/assets/images/user-2.jpg" alt="Alternate Text" width="70" /></div>
                        <div>
                          <h5>
                            John Doe
                            <a href="#" className="btn btn-sm btn-main pull-right"><i className="fa fa-reply"></i> Reply</a>
                            <small>21.03.2017</small>
                          </h5>
                        </div>
                      </div>
                      <div className="comment-desc">
                        <p>
                          Cras lobortis id elit eu vehicula. Sed porttitor nulla vitae nisl varius luctus.
                          Quisque a enim nisl. Maecenas facilisis, felis sed blandit scelerisque, sapien
                          nisl egestas diam, nec blandit diam ipsum eget dolor. In vestibulum tellus
                          ut nunc accumsan eleifend. Donec mattis cursus ligula, id iaculis dui feugiat
                          nec. Etiam ut ante sed neque lacinia volutpat. Maecenas ultricies tempus
                          nibh, sit amet facilisis mauris vulputate in. Phasellus tempor justo et mollis
                          facilisis. Donec placerat at nulla sed suscipit. Praesent accumsan, sem sit
                          amet euismod ullamcorper, justo sapien cursus nisl, nec gravida
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="comment-header">
                    <a href="#" className="btn btn-clean-dark">12 comments</a>
                  </div>

                  {/* Add comment */}
                  <div className="comment-add">
                    <div className="comment-reply-message">
                      <div className="h3 title">Leave a Reply</div>
                      <p>Your email address will not be published.</p>
                    </div>

                    <form action="#" method="post">
                      <div className="form-group">
                        <input type="text" className="form-control" name="name" placeholder="Your Name" required />
                      </div>
                      <div className="form-group">
                        <input type="text" className="form-control" name="email" placeholder="Your Email" required />
                      </div>
                      <div className="form-group">
                        <textarea rows={10} className="form-control" placeholder="Your comment" required></textarea>
                      </div>
                      <div className="clearfix text-center">
                        <input type="submit" className="btn btn-main" value="Add comment" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
