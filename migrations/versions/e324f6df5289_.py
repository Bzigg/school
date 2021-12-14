"""empty message

Revision ID: e324f6df5289
Revises: 037de5e3b8cc
Create Date: 2021-12-14 22:32:11.569205

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'e324f6df5289'
down_revision = '037de5e3b8cc'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('teacher', sa.Column('photo', sa.String(length=255), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('teacher', 'photo')
    # ### end Alembic commands ###
